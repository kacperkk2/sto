import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { catchError, EMPTY, switchMap, timer } from 'rxjs';
import { CONFIG } from '../../app.properties';
import { ApiError, RoomSummaryDto } from '../../services/api/api.models';
import { apiErrorMessage, RoomApi } from '../../services/api/room-api';
import { Sessions } from '../../services/sessions/sessions';

export const NICK_MAX_LENGTH = 20;

@Component({
  selector: 'app-home',
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly api = inject(RoomApi);
  private readonly sessions = inject(Sessions);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);

  readonly nickMaxLength = NICK_MAX_LENGTH;
  /** Zapisany nick (localStorage); pusty — pokazujemy „Ustaw swój nick”. */
  readonly maxRooms = CONFIG.MAX_ROOMS;
  readonly nick = signal(this.sessions.nick);
  /** Edycja nicku w górnej sekcji. */
  readonly editing = signal(false);
  readonly draft = signal('');
  private readonly nickInput = viewChild<ElementRef<HTMLInputElement>>('nickInput');
  private readonly nickForm = viewChild<ElementRef<HTMLElement>>('nickForm');
  readonly busy = signal(false);
  readonly error = signal('');
  /** null — jeszcze nie pobrano. */
  readonly rooms = signal<RoomSummaryDto[] | null>(null);
  readonly roomsError = signal('');
  readonly full = computed(() => (this.rooms()?.length ?? 0) >= CONFIG.MAX_ROOMS);
  /**
   * Gracz ma już pokój na liście (zapisana sesja) — max 1 pokój naraz.
   * Zanim lista przyjdzie (np. po powrocie z pokoju) — wystarczy dowolna zapisana sesja,
   * żeby przycisk nie mignął jako aktywny; martwe sesje usuwa pierwsze odświeżenie listy.
   */
  readonly hasOwnRoom = computed(() => {
    const rooms = this.rooms();
    return rooms ? rooms.some((room) => this.isMine(room)) : this.sessions.all().length > 0;
  });
  /** Komunikat po kliknięciu wyłączonego „Nowy pokój” (na chwilę); null — brak. */
  readonly createHint = signal<string | null>(null);
  private limitHintTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    // pole nicku dostaje fokus od razu po otwarciu
    effect(() => this.nickInput()?.nativeElement.focus());
    inject(DestroyRef).onDestroy(() => clearTimeout(this.limitHintTimer));

    // lista pokoi odświeżana co kilka sekund (backend nie ma SSE dla listy)
    timer(0, CONFIG.ROOMS_REFRESH_MS)
      .pipe(
        switchMap(() =>
          this.api.listRooms().pipe(
            catchError((err: ApiError) => {
              this.roomsError.set(apiErrorMessage(err));
              return EMPTY;
            }),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe((rooms) => {
        // sesje pokoi, których już nie ma, są martwe — numer może zaraz dostać nowy pokój
        const codes = new Set(rooms.map((r) => r.code));
        this.sessions
          .all()
          .filter((s) => !codes.has(s.code))
          .forEach((s) => this.sessions.remove(s.code));
        this.rooms.set(rooms);
        this.roomsError.set('');
      });
  }

  get nickValid(): boolean {
    return isValidNick(this.nick());
  }

  get draftValid(): boolean {
    return isValidNick(this.draft());
  }

  editNick(): void {
    if (this.editing()) {
      // edycja już trwa (np. ponowne kliknięcie pokoju) — nie kasujemy wpisanego tekstu, tylko oddajemy fokus
      this.nickInput()?.nativeElement.focus();
      return;
    }
    this.draft.set(this.nick());
    this.editing.set(true);
  }

  /** Akcja wymaga nicku: otwiera edycję i potrząsa polem (+ krótka wibracja na telefonie). */
  private promptNick(): void {
    this.editNick();
    navigator.vibrate?.(80);
    // przy pierwszym kliknięciu formularza jeszcze nie ma w DOM — czekamy na render
    afterNextRender(
      () => {
        const form = this.nickForm()?.nativeElement;
        if (!form || matchMedia('(prefers-reduced-motion: reduce)').matches) {
          return;
        }
        form.getAnimations().forEach((a) => a.cancel());
        form.animate(
          [0, -8, 8, -6, 6, -3, 3, 0].map((x) => ({ transform: `translateX(${x}px)` })),
          { duration: 400, easing: 'ease-in-out' },
        );
      },
      { injector: this.injector },
    );
  }

  cancelEdit(): void {
    if (this.nick()) {
      this.editing.set(false);
    }
  }

  saveNick(): void {
    if (!this.draftValid) {
      return;
    }
    const nick = this.draft().trim();
    this.sessions.nick = nick;
    this.nick.set(nick);
    this.editing.set(false);
  }

  create(): void {
    if (this.hasOwnRoom()) {
      this.showCreateHint('Masz już swój pokój');
      return;
    }
    if (this.full()) {
      this.showCreateHint('Limit pokoi został osiągnięty');
      return;
    }
    if (this.busy()) {
      return;
    }
    if (!this.nickValid) {
      this.promptNick();
      return;
    }
    const nick = this.nick().trim();
    this.busy.set(true);
    this.error.set('');
    this.api.createRoom(nick).subscribe({
      next: (res) => {
        this.sessions.save({ code: res.code, playerId: res.playerId, playerToken: res.playerToken });
        this.router.navigate(['/room', res.code]);
      },
      error: (err: ApiError) => {
        this.busy.set(false);
        this.error.set(apiErrorMessage(err));
      },
    });
  }

  private showCreateHint(message: string): void {
    clearTimeout(this.limitHintTimer);
    this.createHint.set(message);
    this.limitHintTimer = setTimeout(() => this.createHint.set(null), 2000);
  }

  /** Czy mamy zapisaną sesję w tym pokoju — wtedy można wrócić także w trakcie gry. */
  isMine(room: RoomSummaryDto): boolean {
    return this.sessions.get(room.code) !== null;
  }

  canEnter(room: RoomSummaryDto): boolean {
    return room.joinable || this.isMine(room);
  }

  /** Gracze poza hostem (nicki w pokoju są unikalne). */
  otherPlayers(room: RoomSummaryDto): string {
    return (room.playerNicks ?? []).filter((nick) => nick !== room.hostNick).join(', ');
  }

  /** Bez nicku — jak przy „Nowy pokój”: edycja nicku na górze, po zapisaniu gracz klika ponownie. */
  join(room: RoomSummaryDto): void {
    if (!this.canEnter(room)) {
      return;
    }
    if (!this.nickValid) {
      this.promptNick();
      return;
    }
    this.router.navigate(['/room', room.code]);
  }
}

function isValidNick(raw: string): boolean {
  const nick = raw.trim();
  return nick.length > 0 && nick.length <= NICK_MAX_LENGTH;
}
