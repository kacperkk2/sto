import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CONFIG } from '../../app.properties';
import { PlayerDto } from '../../services/api/api.models';
import { RoomStore } from '../../services/room-store/room-store';

/** Lista graczy; z `showScores` jako ranking z punktami, z `gains` dodatkowo z punktami zdobytymi w rundzie. */
@Component({
  selector: 'app-player-list',
  imports: [MatIconModule],
  template: `
    <ol [class.ranked]="showScores()" [class.compact]="gains()">
      @for (player of players(); track player.id; let i = $index) {
        <li [class.me]="player.id === store.myId()" [class.winner]="highlightIds().includes(player.id)">
          @if (showScores()) {
            <span class="place app-chip" [class.gold]="i === 0">{{ i + 1 }}</span>
          }
          <span class="nick">{{ player.nick }}</span>
          @if (showHost() && player.isHost) {
            <span class="tag">(host)</span>
          }
          @if (showCards() && player.cards.length) {
            <span class="cards" role="img" [attr.aria-label]="'Karty: ' + cardNames(player)">
              @for (card of player.cards; track card) {
                <mat-icon aria-hidden="true" [title]="cardInfo[card].name">{{ cardInfo[card].icon }}</mat-icon>
              }
            </span>
          }
          @if (gains(); as g) {
            @let gain = g[player.id];
            <span class="gain" [class.zero]="!gain">{{ gain === undefined ? '—' : '+' + gain }}</span>
          }
          @if (showScores()) {
            <span class="score">{{ player.score }}</span>
          }
        </li>
      }
    </ol>
  `,
  styles: `
    ol {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    li {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 12px;
      border-radius: 12px;
      background: var(--mat-sys-surface-container);
    }
    li.me {
      /* do środka — w przewijanej sekcji obrys na zewnątrz byłby ucięty */
      outline: 1px solid var(--mat-sys-primary);
      outline-offset: -1px;
    }
    li.winner {
      background: var(--mat-sys-primary-container);
      color: var(--mat-sys-on-primary-container);
    }
    /* miejsce jako żeton (.app-chip w styles.scss), pierwsze — złote */
    .place {
      --chip-size: 26px;
    }
    .nick {
      font: var(--mat-sys-body-large);
    }
    .tag {
      color: var(--mat-sys-on-surface-variant);
      font: var(--mat-sys-label-medium);
    }
    /* niezagrane karty — małe ikony za nickiem */
    .cards {
      display: inline-flex;
      gap: 2px;
      color: var(--mat-sys-on-surface-variant);
    }
    .cards mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }
    .score {
      margin-left: auto;
      font: var(--mat-sys-title-medium);
    }
    /* punkty z rundy: mniejsze, przed sumą; obie kolumny o stałej szerokości, wyrównane do prawej */
    .gain {
      margin-left: auto;
      min-width: 32px;
      text-align: right;
      font: var(--mat-sys-label-medium);
      color: var(--mat-sys-primary);
    }
    .gain.zero {
      color: var(--mat-sys-on-surface-variant);
    }
    .gain + .score {
      margin-left: 0;
      width: 40px;
      text-align: right;
    }

    /* ranking — wszystkie fonty powiększone o ten sam współczynnik */
    .ranked {
      --scale: 1.25;
    }
    .ranked .nick {
      font-size: calc(var(--mat-sys-body-large-size) * var(--scale));
      line-height: calc(var(--mat-sys-body-large-line-height) * var(--scale));
    }
    .ranked .gain {
      font-size: calc(var(--mat-sys-label-medium-size) * var(--scale));
      line-height: calc(var(--mat-sys-label-medium-line-height) * var(--scale));
    }
    .ranked .score {
      font-size: calc(var(--mat-sys-title-medium-size) * var(--scale));
      line-height: calc(var(--mat-sys-title-medium-line-height) * var(--scale));
    }
    /* podsumowanie rundy — niższe wiersze i fonty o stopień mniejsze */
    .ranked.compact {
      --scale: 1.125;
    }
    .compact li {
      padding: 6px 12px;
    }
    /* nick bez powiększenia — jak w lobby */
    .ranked.compact .nick {
      font: var(--mat-sys-body-large);
    }
    .ranked .place {
      --chip-size: calc(24px * var(--scale));
    }
    .ranked .gain {
      min-width: calc(32px * var(--scale));
    }
    .ranked .gain + .score {
      width: calc(40px * var(--scale));
    }
  `,
})
export class PlayerList {
  protected readonly store = inject(RoomStore);

  readonly players = input.required<PlayerDto[]>();
  readonly showScores = input(false);
  /** Dopisek „(host)” przy hoście — tylko w lobby. */
  readonly showHost = input(false);
  readonly highlightIds = input<string[]>([]);
  /** Punkty zdobyte w rundzie (id gracza → zysk); gracze spoza rundy mają „—”. */
  readonly gains = input<Record<string, number> | null>(null);
  /** Ikonki niezagranych kart przy graczach. */
  readonly showCards = input(false);

  protected readonly cardInfo = CONFIG.CARDS;

  cardNames(player: PlayerDto): string {
    return player.cards.map((c) => CONFIG.CARDS[c].name).join(', ');
  }
}
