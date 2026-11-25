import { Component, computed, inject, linkedSignal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CONFIG } from '../../app.properties';
import { Bet } from '../../services/api/api.models';
import { RoomStore } from '../../services/room-store/room-store';
import { BetPanel } from '../bet-panel/bet-panel';
import { BetRow } from '../bet-row/bet-row';
import { CardPhase } from '../card-phase/card-phase';
import { EventInfo } from '../event-info/event-info';
import { PlayerList } from '../player-list/player-list';

/** Widoczny zakład innego gracza (nad odpowiedziami / w panelu zakładu). */
export interface OpenBet {
  nick: string;
  bet: Bet;
}

/**
 * Bieżąca runda: event, zagrane karty, pytanie, faza (karty / wybór ofiary / jawny zakład / zakłady /
 * decyzja o kopii) i wyniki.
 */
@Component({
  selector: 'app-round',
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule, BetPanel, BetRow, CardPhase, PlayerList],
  templateUrl: './round.html',
  styleUrl: './round.scss',
})
export class RoundView {
  protected readonly store = inject(RoomStore);
  private readonly bottomSheet = inject(MatBottomSheet);

  readonly round = computed(() => this.store.round()!);
  readonly me = this.store.me;
  readonly event = computed(() => {
    const event = this.round().event;
    return event ? CONFIG.EVENTS[event] : null;
  });
  readonly revealed = computed(() => this.round().phase === 'REVEALED');
  /** Odpowiedzi ukryte, dopóki trwają decyzje przed rundą (faza kart, wybór ofiary va banque). */
  readonly answersVisible = computed(() => {
    const phase = this.round().phase;
    return phase !== 'CARDS' && phase !== 'VA_BANQUE_PICK';
  });
  /** Krótko, kogo dotyczy event; `mine` — dotyczy mnie. */
  readonly eventStatus = computed<{ text: string; mine: boolean } | null>(() => {
    const r = this.round();
    const myId = this.store.myId();
    const nick = (id: string | null) => this.store.nick(id);
    switch (r.event) {
      case 'VA_BANQUE':
        if (r.vaBanqueTargetId) {
          return r.vaBanqueTargetId === myId
            ? { text: 'Musisz zagrać all-in!', mine: true }
            : { text: `${nick(r.vaBanqueTargetId)} musi grać va banque`, mine: false };
        }
        return r.vaBanqueChooserId === myId
          ? { text: 'Wybierz, kto gra all-in', mine: true }
          : { text: `${nick(r.vaBanqueChooserId)} wybiera, kto gra all-in`, mine: false };
      case 'DOUBLE':
        return { text: 'Punkty ×2', mine: false };
      case 'OPEN_BET': {
        // lider z eventu jest dodany przed kartami, więc jest pierwszy
        const leader = r.openBettorIds[0] ?? null;
        return leader === myId
          ? { text: 'Musisz obstawić jawnie!', mine: true }
          : { text: `${nick(leader)} obstawia jawnie`, mine: false };
      }
      case 'BLIND_COPY': {
        const actor = r.copyActorIds[0] ?? null;
        // decyzja o kopii jest dopiero po zakładach — w trakcie nie obiecujemy akcji, której nie da się wykonać
        if (r.phase === 'COPY_PICK') {
          return actor === myId
            ? { text: 'Przejmij czyjś zakład albo zostań przy swoim', mine: true }
            : { text: `${nick(actor)} decyduje o kopii`, mine: false };
        }
        return actor === myId
          ? { text: 'Obstaw — po zakładach możesz przejąć czyjś', mine: true }
          : { text: `${nick(actor)} po zakładach może przejąć czyjś zakład`, mine: false };
      }
      case 'ALL_IN':
        return { text: 'Wszyscy grają all-in!', mine: true };
      case 'BLITZ':
        return { text: `Tylko ${this.store.phaseSeconds()} s na zakład!`, mine: false };
      default:
        return null;
    }
  });
  /** Zagrane karty (jawne po fazie kart): „Ania → Bartek: musi va banque”; `mine` — dotyczą mnie. */
  readonly playedCards = computed(() => {
    const myId = this.store.myId();
    return this.round().playedCards.map((p) => {
      const info = CONFIG.CARDS[p.card];
      const who = info.target === 'other'
        ? `${this.store.nick(p.playerId)} → ${this.store.nick(p.targetId)}`
        : this.store.nick(p.playerId);
      return {
        key: `${p.playerId}:${p.card}`,
        icon: info.icon,
        name: info.name,
        text: `${who}: ${info.effect}`,
        mine: p.targetId === myId,
      };
    });
  });
  /** Pozostali uczestnicy — do wyboru ofiary va banque i kopii. */
  readonly others = computed(() =>
    this.round()
      .participantIds.filter((id) => id !== this.store.myId())
      .map((id) => ({ id, nick: this.store.nick(id) })),
  );
  readonly timerPercent = computed(() => {
    const left = this.store.secondsLeft();
    return left === null ? 0 : (100 * left) / this.store.phaseSeconds();
  });
  /**
   * Panel zakładu na dole: gdy można obstawić, a w fazie zakładów także po postawieniu
   * (zablokowany, ewentualnie z „Zmień”). W decyzji o kopii go nie ma — miejsce zajmuje lista graczy.
   */
  readonly showPanel = computed(() => {
    const m = this.me();
    const phase = this.round().phase;
    if (!m || (phase !== 'OPEN_BET' && phase !== 'BETTING')) {
      return false;
    }
    return m.canBet || (phase === 'BETTING' && !!m.myBet);
  });
  /**
   * Zakłady innych widoczne w fazie zakładów: jawny zakład lidera (event, widzą wszyscy poza nim)
   * i podejrzane kartą „Zobacz zakład” — pokazywane jednakowo, bez względu na źródło.
   */
  readonly openBetsForMe = computed<OpenBet[]>(() => {
    const myId = this.store.myId();
    const open = this.round().openBets;
    const seen = this.round().phase === 'BETTING' ? (this.me()?.seenBets ?? {}) : {};
    return Object.entries({ ...seen, ...open })
      .filter(([id]) => id !== myId)
      .map(([id, bet]) => ({ nick: this.store.nick(id), bet }));
  });
  /** Dopisek nad panelem, gdy obstawiam pierwszy: jawnie (event) albo dla podglądających (karta). */
  readonly openBetHint = computed(() => {
    const myId = this.store.myId();
    const r = this.round();
    if (r.event === 'OPEN_BET' && r.openBettorIds[0] === myId) {
      return 'Obstawiasz jawnie — wszyscy zobaczą Twój zakład.';
    }
    const peekers = r.playedCards
      .filter((p) => p.card === 'PEEK' && !p.voided && p.targetId === myId)
      .map((p) => this.store.nick(p.playerId));
    return `Obstawiasz pierwszy — Twój zakład zobaczy: ${peekers.join(', ')}.`;
  });
  /**
   * Dopisek nad panelem zakładu, gdy moja karta „Zobacz zakład” przepadła, bo sam obstawiam pierwszy:
   * ktoś też chciał zobaczyć mój zakład albo jestem liderem jawnego zakładu.
   */
  readonly voidedPeekHint = computed(() => {
    const myId = this.store.myId();
    const r = this.round();
    const mine = r.playedCards.find((p) => p.playerId === myId && p.card === 'PEEK' && p.voided);
    if (!mine) {
      return null;
    }
    const peekers = r.playedCards.filter((p) => p.card === 'PEEK' && p.targetId === myId).map((p) => p.playerId);
    if (peekers.includes(mine.targetId)) {
      return `Ty i ${this.store.nick(mine.targetId)} chcieliście zobaczyć swoje zakłady — obie karty „Zobacz zakład” przepadają.`;
    }
    if (peekers.length) {
      return `${peekers.map((id) => this.store.nick(id)).join(', ')} też chce zobaczyć Twój zakład — Twoja karta „Zobacz zakład” przepada.`;
    }
    return 'Obstawiasz jawnie — Twoja karta „Zobacz zakład” przepada.';
  });
  /** Decyzja o kopii: zakłady innych, jeśli je widzę (karta „Zobacz wszystkie” albo „Zobacz zakład”). */
  readonly copyBetOf = (id: string): Bet | null => this.me()?.seenBets?.[id] ?? null;
  /** W decyzji o kopii widzę czyjeś zakłady — wtedy wybór graczy jako wiersze z punktami po bokach. */
  readonly seesCopyBets = computed(
    () => this.round().phase === 'COPY_PICK' && Object.keys(this.me()?.seenBets ?? {}).length > 0,
  );
  /** Kto (poza mną) jeszcze obstawia jawnie — do komunikatu w fazie jawnego zakładu. */
  readonly openBettorsWaiting = computed(() =>
    this.round()
      .openBettorIds.filter((id) => id !== this.store.myId() && !this.round().betPlayerIds.includes(id))
      .map((id) => this.store.nick(id))
      .join(', '),
  );
  /** Kto (poza mną) jeszcze decyduje o kopii. */
  readonly copyActorsWaiting = computed(() =>
    this.round()
      .copyActorIds.filter((id) => id !== this.store.myId())
      .map((id) => this.store.nick(id))
      .join(', '),
  );
  /** Punkty nad odpowiedziami: widoczne zakłady innych albo — w decyzji o kopii — własny zakład kopiującego. */
  readonly betsAbove = computed<{ label: string; bet: Bet }[]>(() => {
    const m = this.me();
    if (this.round().phase === 'COPY_PICK' && m?.canCopy && m.myBet) {
      return [{ label: 'Twój zakład', bet: m.myBet }];
    }
    return this.openBetsForMe().map((o) => ({ label: o.nick, bet: o.bet }));
  });
  /**
   * Klucz fazy jako osobny `computed` — linkedSignal przelicza się przy każdej zmianie sygnałów
   * czytanych w `source`, a `computed` z tym samym stringiem nie powiadamia (nowy stan z SSE,
   * np. po decyzji innego gracza, nie czyści więc mojego wyboru).
   */
  private readonly phaseKey = computed(() => `${this.round().number}:${this.round().tiebreak}:${this.round().phase}`);
  /** Ofiara va banque (event): zaznaczony gracz, czekający na potwierdzenie (czyści się w każdej nowej fazie). */
  readonly vaBanqueChoice = linkedSignal<string, string | null>({
    source: this.phaseKey,
    computation: () => null,
  });
  /** Kopia: zaznaczony gracz, czekający na potwierdzenie (czyści się w każdej nowej fazie). */
  readonly copyChoice = linkedSignal<string, string | null>({
    source: this.phaseKey,
    computation: () => null,
  });
  readonly lastRegular = computed(() => !this.round().tiebreak && this.round().number >= this.round().totalRounds);
  /** Punkty zdobyte w tej rundzie — kolumna w rankingu (samych zakładów nie pokazujemy). */
  readonly gains = computed<Record<string, number> | null>(() => {
    const result = this.round().result;
    return result
      ? Object.fromEntries(Object.entries(result.players).map(([id, r]) => [id, r.gain]))
      : null;
  });

  /** Karty w grze (z ustawień pokoju). */
  readonly gameCards = computed(() => this.store.state()?.settings?.cards ?? []);

  /** Panel z opisami kart; zagrane (spoza ręki) są wyszarzone. */
  openCardInfo(): void {
    EventInfo.openCards(this.bottomSheet, this.gameCards(), this.me()?.hand ?? []);
  }

  openEventInfo(): void {
    const settings = this.store.state()?.settings;
    EventInfo.open(this.bottomSheet, settings?.events ?? [], this.round().event, settings?.cards ?? []);
  }

  place(bet: Bet): void {
    this.store.placeBet(bet);
  }

  toggleVaBanqueChoice(id: string): void {
    this.vaBanqueChoice.update((current) => (current === id ? null : id));
  }

  confirmVaBanque(): void {
    const target = this.vaBanqueChoice();
    if (target) {
      this.store.pickVaBanqueTarget(target);
    }
  }

  toggleCopyChoice(id: string): void {
    this.copyChoice.update((current) => (current === id ? null : id));
  }

  confirmCopy(): void {
    const target = this.copyChoice();
    if (target) {
      this.store.copyBet(target);
    }
  }
}
