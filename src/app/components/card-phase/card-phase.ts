import { Component, computed, inject, linkedSignal } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../app.properties';
import { Card } from '../../services/api/api.models';
import { RoomStore } from '../../services/room-store/room-store';
import { EventInfo } from '../event-info/event-info';

/**
 * Faza kart: wybór jednej karty z ręki (i celu, gdy karta jest na innego gracza), „Zagraj” albo „Pas”.
 * Wybory są tajne do końca fazy — po decyzji widać tylko własną kartę.
 */
@Component({
  selector: 'app-card-phase',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './card-phase.html',
  styleUrl: './card-phase.scss',
})
export class CardPhase {
  protected readonly store = inject(RoomStore);
  protected readonly cards = CONFIG.CARDS;

  private readonly bottomSheet = inject(MatBottomSheet);

  readonly me = this.store.me;
  readonly hand = computed(() => (this.me()?.hand ?? []).map((id) => ({ id, ...CONFIG.CARDS[id] })));
  readonly others = computed(() =>
    (this.store.round()?.participantIds ?? [])
      .filter((id) => id !== this.store.myId())
      .map((id) => ({ id, nick: this.store.nick(id) })),
  );

  /** Zaznaczona karta i cel — czyszczą się w każdej nowej rundzie. */
  private readonly roundKey = computed(() => `${this.store.round()?.number}:${this.store.round()?.tiebreak}`);
  readonly card = linkedSignal<string, Card | null>({ source: this.roundKey, computation: () => null });
  readonly target = linkedSignal<string, string | null>({ source: this.roundKey, computation: () => null });

  readonly needsTarget = computed(() => {
    const card = this.card();
    return !!card && CONFIG.CARDS[card].target === 'other';
  });
  readonly canPlay = computed(() => !!this.card() && (!this.needsTarget() || !!this.target()));
  readonly playLabel = computed(() => {
    const card = this.card();
    if (!card) {
      return 'Wybierz kartę';
    }
    if (this.needsTarget() && !this.target()) {
      return 'Wybierz gracza';
    }
    const name = CONFIG.CARDS[card].name;
    return this.needsTarget() ? `Zagraj ${name} na ${this.store.nick(this.target())}` : `Zagraj ${name}`;
  });

  /** Moja decyzja po zagraniu (do czasu ujawnienia widzę tylko ją). */
  readonly myChoice = computed(() => {
    const played = this.me()?.myCard;
    if (!played) {
      return null;
    }
    const info = CONFIG.CARDS[played.card];
    return {
      icon: info.icon,
      text: info.target === 'other' ? `${info.name} na ${this.store.nick(played.targetId)}` : info.name,
    };
  });

  /** Panel z opisami kart w grze; zagrane (spoza ręki) są wyszarzone. */
  showCards(): void {
    EventInfo.openCards(this.bottomSheet, this.store.state()?.settings?.cards ?? [], this.me()?.hand ?? []);
  }

  selectCard(card: Card): void {
    this.card.update((current) => (current === card ? null : card));
    this.target.set(null);
  }

  selectTarget(id: string): void {
    this.target.update((current) => (current === id ? null : id));
  }

  play(): void {
    const card = this.card();
    if (card && this.canPlay()) {
      this.store.playCard(card, this.needsTarget() ? this.target() : null);
    }
  }
}
