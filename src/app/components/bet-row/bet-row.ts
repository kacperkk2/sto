import { Component, input } from '@angular/core';
import { Bet } from '../../services/api/api.models';

/**
 * Czyjś zakład nad odpowiedziami: punkty na A | podpis | punkty na B — liczby dosunięte do krawędzi,
 * nad swoimi odpowiedziami. Wspólny wygląd jawnych, podejrzanych i własnych zakładów.
 */
@Component({
  selector: 'app-bet-row',
  template: `
    <span class="points">{{ bet().onA }}</span>
    <span class="label">{{ label() }}</span>
    <span class="points">{{ bet().onB }}</span>
  `,
  styles: `
    :host {
      grid-column: 1 / -1;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 8px;
      margin-bottom: -4px;
      color: var(--mat-sys-tertiary);
    }

    .points {
      font: var(--mat-sys-title-medium);

      // wcięte jak tekst w kafelkach odpowiedzi
      &:first-child {
        justify-self: start;
        padding-left: 10px;
      }

      &:last-child {
        justify-self: end;
        padding-right: 10px;
      }
    }

    .label {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font: var(--mat-sys-label-large);
    }
  `,
  host: { role: 'group', '[attr.aria-label]': `label() + ': ' + bet().onA + ' na A, ' + bet().onB + ' na B'` },
})
export class BetRow {
  readonly bet = input.required<Bet>();
  readonly label = input.required<string>();
}
