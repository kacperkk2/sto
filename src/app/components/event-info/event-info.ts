import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../app.properties';
import { Card, RoundEvent } from '../../services/api/api.models';

export interface EventInfoData {
  /** Eventy w losowaniu; pozostałe są pokazane jako wyłączone. */
  active: readonly RoundEvent[];
  /** Event bieżącej rundy — wyróżniony na liście. */
  current?: RoundEvent | null;
  /** Karty w grze; sekcja kart jest widoczna tylko, gdy jakaś jest włączona. */
  cards?: readonly Card[];
  /** Dostępne karty (ręka w grze, włączone w lobby) — pozostałe z `cards` są wyszarzone. */
  available?: readonly Card[];
  /** Tylko sekcja kart (panel z fazy kart), bez eventów. */
  cardsOnly?: boolean;
}

/** Panel od dołu z opisami eventów rundy i kart graczy. */
@Component({
  selector: 'app-event-info',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './event-info.html',
  styleUrl: './event-info.scss',
})
export class EventInfo {
  protected readonly data = inject<EventInfoData>(MAT_BOTTOM_SHEET_DATA);
  protected readonly sheetRef = inject(MatBottomSheetRef<EventInfo>);
  protected readonly events = (Object.keys(CONFIG.EVENTS) as RoundEvent[]).map((id) => ({
    id,
    ...CONFIG.EVENTS[id],
  }));

  protected readonly cards = (this.data.cards ?? []).map((id) => ({ id, ...CONFIG.CARDS[id] }));

  static open(
    bottomSheet: MatBottomSheet,
    active: readonly RoundEvent[],
    current?: RoundEvent | null,
    cards?: readonly Card[],
  ): void {
    bottomSheet.open<EventInfo, EventInfoData>(EventInfo, { data: { active, current, cards } });
  }

  /** Same karty: `cards` na liście, spoza `available` wyszarzone (w grze — zagrane, w lobby — wyłączone). */
  static openCards(
    bottomSheet: MatBottomSheet,
    cards: readonly Card[],
    available: readonly Card[],
  ): void {
    bottomSheet.open<EventInfo, EventInfoData>(EventInfo, {
      data: { active: [], cards, available, cardsOnly: true },
    });
  }

  /** Lobby: wszystkie karty, niewłączone wyszarzone (jak eventy). */
  static openAllCards(bottomSheet: MatBottomSheet, enabled: readonly Card[]): void {
    EventInfo.openCards(bottomSheet, Object.keys(CONFIG.CARDS) as Card[], enabled);
  }
}
