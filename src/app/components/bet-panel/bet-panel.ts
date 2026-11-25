import { Component, computed, input, linkedSignal, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { Bet } from '../../services/api/api.models';

/**
 * Rozdzielenie 100 pkt między A i B (krok 5). Suwak to punkty na B: lewo = wszystko na A.
 * Przy `allIn` (ofiara va banque z eventu lub karty, „wszyscy va banque”) tylko wybór jednej odpowiedzi.
 * Po postawieniu (`bet`) panel jest zablokowany; „Zmień” (gdy `canChange`) cofa zakład i odblokowuje go.
 */
@Component({
  selector: 'app-bet-panel',
  imports: [MatButtonModule, MatIconModule, MatSliderModule],
  templateUrl: './bet-panel.html',
  styleUrl: './bet-panel.scss',
})
export class BetPanel {
  readonly answers = input.required<[string, string]>();
  readonly allIn = input(false);
  readonly disabled = input(false);
  /** Postawiony już zakład gracza (z serwera). */
  readonly bet = input<Bet | null>(null);
  /** Czy postawiony zakład można jeszcze zmienić. */
  readonly canChange = input(false);
  /** Widoczne zakłady innych graczy — ich punkty (z podpisem) nad odpowiedziami; `secret` — widzę tylko ja. */
  readonly openBets = input<{ nick: string; bet: Bet; secret: boolean }[]>([]);
  readonly placed = output<Bet>();
  /** „Zmień” — rodzic cofa zakład na serwerze, panel odblokuje się, gdy `bet` zniknie. */
  readonly changed = output<void>();

  /** Klucz zakładu z serwera — suwak resetuje się tylko przy faktycznej zmianie, nie przy każdym `/me`. */
  private readonly betKey = computed(() => {
    const bet = this.bet();
    return bet ? `${bet.onA}/${bet.onB}` : null;
  });

  /** Punkty na B — po cofnięciu zakładu zostaje poprzednie ustawienie. */
  readonly onB = linkedSignal<string | null, number>({
    source: this.betKey,
    computation: (_, prev) => this.bet()?.onB ?? prev?.value ?? 50,
  });
  readonly onA = computed(() => 100 - this.onB());
  /** Przy va banque nic nie jest wybrane, dopóki gracz nie kliknie. */
  readonly allInChoice = linkedSignal<string | null, 0 | 1 | null>({
    source: this.betKey,
    computation: (_, prev) => {
      const bet = this.bet();
      return bet ? (bet.onA === 100 ? 0 : 1) : (prev?.value ?? null);
    },
  });
  readonly locked = computed(() => !!this.bet());

  readonly canPlace = computed(
    () => !this.disabled() && !this.locked() && (!this.allIn() || this.allInChoice() !== null),
  );

  /** Nasycenie podświetlenia kafelka: 0 przy ≤50 pkt, 1 przy 100 pkt. */
  level(points: number): number {
    return Math.max(0, (points - 50) / 50);
  }

  /** Wyszarzenie kafelka: 0 przy ≥50 pkt, 1 przy 0 pkt. */
  dim(points: number): number {
    return Math.max(0, (50 - points) / 50);
  }

  set(onB: number): void {
    this.onB.set(onB);
  }

  /** Kliknięcie kafelka odpowiedzi — suwak w całości na jej stronę (punkty na B: 0 albo 100). */
  pick(onB: 0 | 100): void {
    if (!this.disabled() && !this.locked()) {
      this.onB.set(onB);
    }
  }

  place(): void {
    if (!this.canPlace()) {
      return;
    }
    if (this.allIn()) {
      this.placed.emit(this.allInChoice() === 0 ? { onA: 100, onB: 0 } : { onA: 0, onB: 100 });
    } else {
      this.placed.emit({ onA: this.onA(), onB: this.onB() });
    }
  }
}
