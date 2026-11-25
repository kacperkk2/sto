import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RoomStore } from '../../services/room-store/room-store';
import { PlayerList } from '../player-list/player-list';

/** Koniec gry: zwycięzca, ranking, „zagraj ponownie” dla hosta. */
@Component({
  selector: 'app-finished',
  imports: [MatButtonModule, MatIconModule, PlayerList],
  template: `
    <div class="winner">
      <mat-icon>emoji_events</mat-icon>
      <h2>{{ winners() }}</h2>
      <p>{{ iWon() ? 'Wygrywasz!' : 'wygrywa grę' }}</p>
    </div>

    <div class="app-scroll">
      <app-player-list [players]="store.ranked()" [showScores]="true" [highlightIds]="store.state()?.winnerIds ?? []" />
    </div>

    @if (store.isHost()) {
      <button matButton="filled" [disabled]="store.busy()" (click)="store.playAgain()">
        <mat-icon>replay</mat-icon>
        Zagraj ponownie
      </button>
    } @else {
      <p class="hint">Host może rozpocząć kolejną grę.</p>
    }
  `,
  styles: `
    /* zwycięzca | ranking (przewijany) | przycisk — całość w wysokości ekranu */
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .winner,
    button,
    .hint {
      flex: none;
    }
    .winner {
      text-align: center;
      padding-top: 8px;
      color: var(--mat-sys-primary);
      mat-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
      }
      h2 {
        font: var(--mat-sys-headline-large);
        margin: 0;
      }
      p {
        margin: 4px 0 0;
        color: var(--mat-sys-on-surface-variant);
      }
    }
    .hint {
      text-align: center;
      color: var(--mat-sys-on-surface-variant);
      margin: 0;
    }
  `,
})
export class Finished {
  protected readonly store = inject(RoomStore);

  readonly winners = computed(() =>
    (this.store.state()?.winnerIds ?? []).map((id) => this.store.nick(id)).join(', '),
  );
  readonly iWon = computed(() => (this.store.state()?.winnerIds ?? []).includes(this.store.myId() ?? ''));
}
