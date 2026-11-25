import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, finalize, Observable, of, shareReplay, Subscription, tap } from 'rxjs';
import { CONFIG } from '../../app.properties';
import {
  ApiError,
  Bet,
  Card,
  GameSettings,
  GameStateDto,
  MyStateDto,
  PlayerDto,
  ScenarioDto,
} from '../api/api.models';
import { apiErrorMessage, normalizeRoomCode, RoomApi } from '../api/room-api';
import { ConnectionStatus, RoomEvents } from '../api/room-events';
import { RoomSession, Sessions } from '../sessions/sessions';

/**
 * - `loading` — pobieranie stanu / automatyczne dołączanie,
 * - `join` — brak sesji dla tego pokoju: formularz nicku,
 * - `room` — jest sesja i stan: lobby / gra / koniec,
 * - `error` — pokój nie istnieje albo brak połączenia.
 *
 * Zamknięcie pokoju nie ma własnego widoku — wracamy na stronę główną z komunikatem.
 */
export type RoomView = 'loading' | 'join' | 'room' | 'error';

/**
 * Stan jednego pokoju dla komponentu `Room` (provider na poziomie komponentu).
 * Publiczny stan przychodzi z SSE (`state`), prywatny (`/me`) dociągamy po każdej zmianie wersji.
 */
@Injectable()
export class RoomStore {
  private readonly api = inject(RoomApi);
  private readonly roomEvents = inject(RoomEvents);
  private readonly sessions = inject(Sessions);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  readonly code = signal('');
  readonly view = signal<RoomView>('loading');
  readonly state = signal<GameStateDto | null>(null);
  readonly me = signal<MyStateDto | null>(null);
  readonly connection = signal<ConnectionStatus>('closed');
  readonly errorMessage = signal('');
  /** Trwa akcja gracza — blokujemy przyciski. */
  readonly busy = signal(false);
  /** Bieżący czas skorygowany o różnicę zegara z serwerem, tyka co 250 ms. */
  readonly now = signal(Date.now());
  /** Host ogląda ustawienia gry w lobby zamiast listy graczy (zmienia też nagłówek pokoju). */
  readonly settingsOpen = signal(false);
  /** Pytania zagrane przeze mnie jako host, per zestaw pytań (historia w localStorage). */
  readonly playedQuestions = signal(this.sessions.playedQuestions);
  /** Zestawy pytań backendu (pierwszy domyślny), `null` dopóki nie dociągnięte. */
  readonly scenarios = signal<ScenarioDto[] | null>(null);
  private scenarios$: Observable<ScenarioDto[]> | undefined;

  readonly round = computed(() => this.state()?.round ?? null);
  readonly myId = computed(() => this.me()?.playerId ?? this.session?.playerId ?? null);
  readonly isHost = computed(() => !!this.state() && this.state()!.hostId === this.myId());
  readonly playersById = computed(() => new Map((this.state()?.players ?? []).map((p) => [p.id, p])));
  /** Gracze w kolejności rankingu (w lobby: kolejność dołączenia). */
  readonly ranked = computed<PlayerDto[]>(() => {
    const state = this.state();
    if (!state) {
      return [];
    }
    if (!state.ranking.length) {
      return state.players;
    }
    const byId = this.playersById();
    return state.ranking.map((id) => byId.get(id)!).filter(Boolean);
  });
  /**
   * Mój własny termin (cel karty Blitz) — wtedy timer liczy do niego, a nie do końca fazy.
   * `/me` podaje go tylko, dopóki nie obstawię, więc bierzemy też publiczny `blitzEndsAt` —
   * po obstawieniu nadal tylko do niego mogę zmienić zakład.
   */
  private readonly myDeadline = computed(() => {
    const round = this.round();
    const myId = this.myId();
    const blitzEndsAt = myId && round?.blitzIds.includes(myId) ? round.blitzEndsAt : null;
    return this.me()?.myDeadline ?? blitzEndsAt ?? null;
  });
  /** Sekundy do końca fazy albo mojego terminu (null, gdy faza nie ma limitu). */
  readonly secondsLeft = computed(() => {
    const endsAt = this.myDeadline() ?? this.round()?.phaseEndsAt;
    if (!endsAt) {
      return null;
    }
    return Math.max(0, Math.ceil((Date.parse(endsAt) - this.now()) / 1000));
  });
  /** Pełny czas fazy (albo mojego terminu) — do paska postępu. */
  readonly phaseSeconds = computed(() => {
    const phase = this.round()?.phase;
    if (phase === 'CARDS') {
      return this.state()?.settings?.cardSeconds ?? CONFIG.DEFAULT_SETTINGS.cardSeconds;
    }
    if (phase === 'VA_BANQUE_PICK') {
      return CONFIG.VA_BANQUE_PICK_SECONDS;
    }
    if (phase === 'COPY_PICK') {
      return CONFIG.COPY_PICK_SECONDS;
    }
    const betSeconds = this.state()?.settings?.betSeconds ?? 30;
    const blitz = this.round()?.event === 'BLITZ' || !!this.myDeadline();
    return blitz ? Math.min(betSeconds, CONFIG.BLITZ_BET_SECONDS) : betSeconds;
  });

  private session: RoomSession | null = null;
  private clockOffset = 0;
  private closed = false;
  private autoJoinTried = false;
  private eventsSub: Subscription | null = null;
  private restartTimer: ReturnType<typeof setTimeout> | null = null;
  private meRequest = 0;

  constructor() {
    const ticker = setInterval(() => this.now.set(Date.now() + this.clockOffset), 250);
    const onVisibility = () => {
      // telefony zrywają SSE w tle — po powrocie dociągamy stan
      if (document.visibilityState === 'visible' && this.view() === 'room') {
        this.refresh();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    inject(DestroyRef).onDestroy(() => {
      clearInterval(ticker);
      document.removeEventListener('visibilitychange', onVisibility);
      this.stopEvents();
    });
  }

  nick(playerId: string | null | undefined): string {
    return (playerId && this.playersById().get(playerId)?.nick) || '?';
  }

  enter(code: string): void {
    this.stopEvents();
    this.code.set(normalizeRoomCode(code));
    this.state.set(null);
    this.me.set(null);
    this.errorMessage.set('');
    this.session = this.sessions.get(this.code());
    if (this.session) {
      this.load();
    } else if (this.sessions.nick && !this.autoJoinTried) {
      this.autoJoinTried = true;
      this.join(this.sessions.nick);
    } else {
      this.view.set('join');
    }
  }

  join(rawNick: string): void {
    const nick = rawNick.trim();
    this.view.set('loading');
    this.api.joinRoom(this.code(), nick).subscribe({
      next: (res) => {
        this.sessions.nick = nick;
        this.session = { code: this.code(), playerId: res.playerId, playerToken: res.playerToken };
        this.sessions.save(this.session);
        this.load();
      },
      error: (err: ApiError) => {
        if (err.code === 'ROOM_NOT_FOUND') {
          this.fail(apiErrorMessage(err));
        } else {
          this.errorMessage.set(apiErrorMessage(err));
          this.view.set('join');
        }
      },
    });
  }

  /** Ponowne wejście po błędzie połączenia. */
  retry(): void {
    this.enter(this.code());
  }

  /** Ustawienia następnej gry — trafiają do pokoju, więc gracze widzą je w lobby. */
  saveSettings(settings: Partial<GameSettings>): void {
    this.sessions.settings = settings;
    this.api.updateSettings(this.code(), settings).subscribe({
      next: (state) => this.applyState(state),
      error: (err: ApiError) => this.toast(apiErrorMessage(err)),
    });
  }

  startGame(settings: Partial<GameSettings>): void {
    this.sessions.settings = settings;
    // bez wybranego zestawu gra idzie na zestawie pokoju (backend zawsze go podaje)
    const scenario = settings.scenario ?? this.state()?.settings.scenario;
    const excluded = scenario ? this.sessions.playedQuestionIds(scenario) : [];
    this.run(this.api.startGame(this.code(), settings, excluded));
  }

  /**
   * Zestawy pytań (raz na pokój, wynik też w `scenarios`). Błąd daje pustą listę — przy następnym
   * wywołaniu próbujemy znowu.
   */
  loadScenarios(): Observable<ScenarioDto[]> {
    this.scenarios$ ??= this.api.scenarios().pipe(
      tap((list) => this.scenarios.set(list)),
      catchError(() => {
        this.scenarios$ = undefined;
        return of([]);
      }),
      shareReplay(1),
    );
    return this.scenarios$;
  }

  /** Czyści historię zagranych pytań zestawu; w komunikacie można to cofnąć. */
  resetPlayedQuestions(scenario: string): void {
    const previous = this.sessions.playedQuestionIds(scenario);
    this.sessions.setPlayedQuestionIds(scenario, []);
    this.playedQuestions.set(this.sessions.playedQuestions);
    this.snackBar
      .open('Wyczyszczono historię pytań zestawu', 'Cofnij', { duration: 6000 })
      .onAction()
      .subscribe(() => {
        const current = this.sessions.playedQuestionIds(scenario);
        this.sessions.setPlayedQuestionIds(scenario, [...new Set([...previous, ...current])]);
        this.playedQuestions.set(this.sessions.playedQuestions);
      });
  }

  /** „Zagraj ponownie” — wszyscy wracają do lobby, host może zmienić ustawienia i wystartować. */
  playAgain(): void {
    this.run(this.api.returnToLobby(this.code()));
  }

  addBots(count: number): void {
    this.run(this.api.addBots(this.code(), count));
  }

  nextRound(): void {
    this.run(this.api.nextRound(this.code()));
  }

  /** Faza kart: `targetId` tylko dla kart wycelowanych w innego gracza. */
  playCard(card: Card, targetId: string | null): void {
    this.run(this.api.playCard(this.code(), card, targetId));
  }

  passCard(): void {
    this.run(this.api.passCard(this.code()));
  }

  pickVaBanqueTarget(targetId: string): void {
    this.run(this.api.pickVaBanqueTarget(this.code(), targetId));
  }

  placeBet(bet: Bet): void {
    this.run(this.api.placeBet(this.code(), bet));
  }

  /** „Zmień” — cofa zakład, gracz znów liczy się jako nieobstawiony. */
  withdrawBet(): void {
    this.run(this.api.withdrawBet(this.code()));
  }

  copyBet(targetId: string): void {
    this.run(this.api.copyBet(this.code(), targetId));
  }

  /** Kopia w ciemno: wylosowany zostaje przy swoim zakładzie. */
  keepBet(): void {
    this.run(this.api.keepBet(this.code()));
  }

  closeRoom(): void {
    this.busy.set(true);
    this.api
      .closeRoom(this.code())
      .pipe(finalize(() => this.busy.set(false)))
      .subscribe({ next: () => this.onClosed(), error: (err: ApiError) => this.toast(apiErrorMessage(err)) });
  }

  get savedSettings(): Partial<GameSettings> {
    return this.sessions.settings;
  }

  private load(): void {
    this.api.getState(this.code()).subscribe({
      next: (state) => {
        this.applyState(state);
        this.view.set('room');
        this.startEvents();
      },
      error: (err: ApiError) => this.onLoadError(err),
    });
  }

  private refresh(): void {
    this.api.getState(this.code()).subscribe({
      next: (state) => this.applyState(state),
      error: (err: ApiError) => this.onLoadError(err),
    });
  }

  private onLoadError(err: ApiError): void {
    if (err.code === 'UNAUTHORIZED') {
      // sesja nieważna (restart serwera albo numer pokoju zajął już nowy pokój) — dołączamy od nowa
      this.sessions.remove(this.code());
      this.session = null;
      this.stopEvents();
      if (this.sessions.nick) {
        this.join(this.sessions.nick);
      } else {
        this.errorMessage.set(apiErrorMessage(err));
        this.view.set('join');
      }
    } else if (err.code === 'ROOM_NOT_FOUND') {
      this.sessions.remove(this.code());
      this.fail(apiErrorMessage(err));
    } else {
      this.fail(apiErrorMessage(err));
    }
  }

  private applyState(state: GameStateDto): void {
    const current = this.state();
    if (current && state.version < current.version) {
      return;
    }
    this.clockOffset = Date.parse(state.serverTime) - Date.now();
    this.now.set(Date.now() + this.clockOffset);
    this.state.set(state);
    this.rememberQuestion(state);
    if (!current || current.version !== state.version || !this.me()) {
      this.refreshMe();
    }
  }

  private refreshMe(): void {
    const request = ++this.meRequest;
    this.api.getMe(this.code()).subscribe({
      next: (me) => {
        if (request === this.meRequest) {
          this.me.set(me);
        }
      },
      error: () => {
        // stan publiczny i tak przyjdzie ponownie
      },
    });
  }

  private startEvents(): void {
    if (this.eventsSub || !this.session) {
      return;
    }
    let wasOpen = false;
    this.eventsSub = this.roomEvents
      .events(this.code(), this.session.playerToken, (status) => {
        this.connection.set(status);
        if (status === 'open') {
          if (wasOpen) {
            this.refresh(); // ponowne połączenie — mogło coś umknąć
          }
          wasOpen = true;
        }
      })
      .subscribe({
        next: (event) => (event.type === 'state' ? this.applyState(event.data) : this.onClosed()),
        error: () => {
          // przeglądarka zrezygnowała — sprawdzamy przez REST i otwieramy strumień ponownie
          this.eventsSub = null;
          this.restartTimer = setTimeout(() => {
            this.restartTimer = null;
            if (this.view() === 'room') {
              this.refresh();
              this.startEvents();
            }
          }, CONFIG.EVENTS_RESTART_DELAY_MS);
        },
      });
  }

  private stopEvents(): void {
    this.eventsSub?.unsubscribe();
    this.eventsSub = null;
    if (this.restartTimer) {
      clearTimeout(this.restartTimer);
      this.restartTimer = null;
    }
  }

  private onClosed(): void {
    this.stopEvents();
    this.sessions.remove(this.code());
    if (!this.closed) {
      // zamknięcie przychodzi i z odpowiedzi REST hosta, i z SSE — reagujemy raz
      this.closed = true;
      this.toast('Pokój został zamknięty');
      this.router.navigateByUrl('/');
    }
  }

  private fail(message: string): void {
    this.stopEvents();
    this.errorMessage.set(message);
    this.view.set('error');
  }

  private run(action: Observable<GameStateDto>): void {
    this.busy.set(true);
    action.pipe(finalize(() => this.busy.set(false))).subscribe({
      next: (state) => this.applyState(state),
      error: (err: ApiError) => {
        this.toast(apiErrorMessage(err));
        this.refresh();
      },
    });
  }

  /** Host zapamiętuje każde pokazane pytanie (w zestawie gry) — w kolejnych grach backend go nie wylosuje. */
  private rememberQuestion(state: GameStateDto): void {
    const id = state.round?.question.id;
    const scenario = state.settings.scenario;
    if (id && scenario && state.hostId === this.myId() && this.sessions.addPlayedQuestion(scenario, id)) {
      this.playedQuestions.set(this.sessions.playedQuestions);
    }
  }

  private toast(message: string): void {
    this.snackBar.open(message, 'OK', { duration: 4000 });
  }
}
