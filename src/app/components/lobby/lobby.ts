import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { environment } from '../../../environments/environment';
import { CONFIG } from '../../app.properties';
import { Card, GameSettings, RoundEvent, ScenarioDto } from '../../services/api/api.models';
import { RoomStore } from '../../services/room-store/room-store';
import { EventInfo } from '../event-info/event-info';
import { PlayerList } from '../player-list/player-list';
import { SettingsSummary } from '../settings-summary/settings-summary';

/** Opóźnienie wysłania zmienionych ustawień — suwak zmienia wartość przy każdym ruchu. */
const SAVE_DELAY_MS = 400;

@Component({
  selector: 'app-lobby',
  imports: [
    MatButtonModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSliderModule,
    PlayerList,
    SettingsSummary,
  ],
  templateUrl: './lobby.html',
  styleUrl: './lobby.scss',
})
export class Lobby {
  protected readonly store = inject(RoomStore);
  private readonly bottomSheet = inject(MatBottomSheet);

  readonly devBots = !environment.production;
  readonly minPlayers = CONFIG.MIN_PLAYERS;
  readonly eventInfo = CONFIG.EVENTS;
  readonly allEvents = Object.keys(CONFIG.EVENTS) as RoundEvent[];
  readonly cardInfo = CONFIG.CARDS;
  readonly allCards = Object.keys(CONFIG.CARDS) as Card[];
  readonly settings = signal<GameSettings>(this.initialSettings());
  readonly missingPlayers = computed(() =>
    Math.max(0, this.minPlayers - (this.store.state()?.players.length ?? 0)),
  );
  /** Wybrany w ustawieniach zestaw pytań. */
  readonly scenario = computed(() => this.findScenario(this.settings().scenario));
  /** Ile pytań wybranego zestawu zagrałem jako host. */
  readonly playedCount = computed(() => this.store.playedQuestions()[this.settings().scenario ?? '']?.length ?? 0);
  /** Nazwa zestawu pokoju — w podsumowaniu ustawień dla wszystkich. */
  readonly roomScenarioName = computed(() => this.findScenario(this.store.state()?.settings.scenario)?.name ?? null);
  private saveTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    // każde wejście do lobby (np. po zakończonej grze) zaczyna od listy graczy
    this.store.settingsOpen.set(false);
    const isHost = this.store.isHost();
    this.store
      .loadScenarios()
      .pipe(takeUntilDestroyed())
      .subscribe((scenarios) => {
        if (!isHost) {
          return;
        }
        // zestaw zapamiętany w localStorage mógł zniknąć z backendu — wtedy domyślny (pierwszy)
        if (scenarios.length && !scenarios.some((s) => s.id === this.settings().scenario)) {
          this.settings.update((s) => ({ ...s, scenario: scenarios[0].id }));
        }
        // gracze od razu widzą ostatnie ustawienia hosta
        this.store.saveSettings(this.settings());
      });
    inject(DestroyRef).onDestroy(() => clearTimeout(this.saveTimer));
  }

  private findScenario(id: string | null | undefined): ScenarioDto | null {
    return this.store.scenarios()?.find((s) => s.id === id) ?? null;
  }

  /** Ostatnie ustawienia hosta z localStorage; bez kart i eventów, których już nie ma (backend by je odrzucił). */
  private initialSettings(): GameSettings {
    const saved: Partial<GameSettings> = this.store.savedSettings;
    return {
      ...CONFIG.DEFAULT_SETTINGS,
      ...saved,
      events: (saved.events ?? CONFIG.DEFAULT_SETTINGS.events).filter((e) => e in CONFIG.EVENTS),
      cards: (saved.cards ?? CONFIG.DEFAULT_SETTINGS.cards).filter((c) => c in CONFIG.CARDS),
    };
  }

  update<K extends keyof GameSettings>(key: K, value: GameSettings[K]): void {
    this.settings.update((s) => ({ ...s, [key]: value }));
    clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.store.saveSettings(this.settings()), SAVE_DELAY_MS);
  }

  toggleEvent(event: RoundEvent, enabled: boolean): void {
    const current = this.settings().events;
    // kolejność jak w CONFIG.EVENTS, bez duplikatów
    this.update(
      'events',
      this.allEvents.filter((e) => (e === event ? enabled : current.includes(e))),
    );
  }

  toggleCard(card: Card, enabled: boolean): void {
    const current = this.settings().cards;
    // kolejność jak w CONFIG.CARDS, bez duplikatów
    this.update(
      'cards',
      this.allCards.filter((c) => (c === card ? enabled : current.includes(c))),
    );
  }

  showEvents(): void {
    EventInfo.open(this.bottomSheet, this.settings().events);
  }

  showCards(): void {
    EventInfo.openAllCards(this.bottomSheet, this.settings().cards);
  }

  start(): void {
    // start i tak wysyła aktualne ustawienia
    clearTimeout(this.saveTimer);
    this.store.startGame(this.settings());
  }
}
