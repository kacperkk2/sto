import { Component, computed, effect, inject, input, signal, untracked } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { RoomStore } from '../../services/room-store/room-store';
import { Sessions } from '../../services/sessions/sessions';
import { Finished } from '../finished/finished';
import { NICK_MAX_LENGTH } from '../home/home';
import { Lobby } from '../lobby/lobby';
import { RoundView } from '../round/round';

@Component({
  selector: 'app-room',
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    RouterLink,
    Finished,
    Lobby,
    RoundView,
  ],
  providers: [RoomStore],
  templateUrl: './room.html',
  styleUrl: './room.scss',
})
export class Room {
  protected readonly store = inject(RoomStore);

  /** Z trasy `/room/:code`. */
  readonly code = input.required<string>();

  readonly nickMaxLength = NICK_MAX_LENGTH;
  readonly nick = signal(inject(Sessions).nick);
  /** Nagłówek pełni rolę nagłówka ustawień: strzałka wraca do graczy. */
  readonly inSettings = computed(
    () =>
      this.store.settingsOpen() &&
      this.store.view() === 'room' &&
      this.store.isHost() &&
      this.store.state()?.status === 'LOBBY',
  );

  constructor() {
    effect(() => {
      const code = this.code();
      untracked(() => this.store.enter(code));
    });
  }

  get nickValid(): boolean {
    const nick = this.nick().trim();
    return nick.length > 0 && nick.length <= NICK_MAX_LENGTH;
  }

  join(): void {
    if (this.nickValid) {
      this.store.join(this.nick());
    }
  }
}
