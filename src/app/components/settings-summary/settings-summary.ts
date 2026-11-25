import { Component, computed, inject, input } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../app.properties';
import { Card, GameSettings, RoundEvent } from '../../services/api/api.models';
import { EventInfo } from '../event-info/event-info';

/** Skrót ustawień gry widoczny dla wszystkich w lobby. */
@Component({
  selector: 'app-settings-summary',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './settings-summary.html',
  styleUrl: './settings-summary.scss',
})
export class SettingsSummary {
  private readonly bottomSheet = inject(MatBottomSheet);

  readonly settings = input.required<GameSettings>();
  /** Nazwa zestawu pytań; bez niej pokazujemy jego ID. */
  readonly scenarioName = input<string | null>(null);

  protected readonly eventsEnabled = computed(
    () => this.settings().eventChance > 0 && this.settings().events.length > 0,
  );
  /** Zawsze wszystkie eventy (stała szerokość wiersza), wyłączone są wyszarzone. */
  protected readonly eventIcons = computed(() =>
    (Object.keys(CONFIG.EVENTS) as RoundEvent[]).map((id) => ({
      id,
      ...CONFIG.EVENTS[id],
      active: this.eventsEnabled() && this.settings().events.includes(id),
    })),
  );

  /** Zawsze wszystkie karty, wyłączone są wyszarzone (jak eventy). */
  protected readonly cardIcons = computed(() =>
    (Object.keys(CONFIG.CARDS) as Card[]).map((id) => ({
      id,
      ...CONFIG.CARDS[id],
      active: this.settings().cards.includes(id),
    })),
  );

  showEvents(): void {
    EventInfo.open(
      this.bottomSheet,
      this.eventsEnabled() ? this.settings().events : [],
    );
  }

  showCards(): void {
    EventInfo.openAllCards(this.bottomSheet, this.settings().cards);
  }
}
