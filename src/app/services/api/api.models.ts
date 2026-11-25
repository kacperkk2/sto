// Modele z kontraktu API: sto-backend/docs/API.md

export type RoomStatus = 'LOBBY' | 'IN_GAME' | 'FINISHED' | 'CLOSED';
export type RoundEvent = 'VA_BANQUE' | 'DOUBLE' | 'OPEN_BET' | 'BLIND_COPY' | 'ALL_IN' | 'BLITZ';
export type RoundPhase = 'CARDS' | 'VA_BANQUE_PICK' | 'OPEN_BET' | 'BETTING' | 'COPY_PICK' | 'REVEALED';
/** Karta gracza — oparta na eventach, ale działa inaczej (opisy w `CONFIG.CARDS`). */
export type Card = 'VA_BANQUE' | 'DOUBLE' | 'PEEK' | 'COPY' | 'BLITZ' | 'TAX';

/** Karta zagrana w fazie kart; `targetId` — cel (przy kartach „na siebie” sam gracz). */
export interface PlayedCard {
  playerId: string;
  card: Card;
  targetId: string;
}

/** Podział 100 pkt między odpowiedzi A i B (krok 5). */
export interface Bet {
  onA: number;
  onB: number;
}

export interface GameSettings {
  rounds: number;
  eventChance: number;
  betSeconds: number;
  lastRoundDouble: boolean;
  /** Eventy biorące udział w losowaniu; pusta lista = same zwykłe rundy. */
  events: readonly RoundEvent[];
  /** Karty, które każdy dostaje na start (po 1 sztuce); pusta lista = gra bez kart. */
  cards: readonly Card[];
  /** Czas fazy kart. */
  cardSeconds: number;
  /** ID zestawu pytań (`ScenarioDto.id`); `null` tylko w żądaniu = domyślny zestaw backendu. */
  scenario: string | null;
}

/** Zestaw pytań — jeden plik JSON na backendzie. */
export interface ScenarioDto {
  id: string;
  name: string;
  /** Liczba pytań w zestawie. */
  count: number;
  /** `false` — pytania idą po kolei (kolejność z pliku), nie losowo. */
  random: boolean;
}

export interface PlayerDto {
  id: string;
  nick: string;
  isHost: boolean;
  score: number;
  /** Niezagrane karty — zmieniają się dopiero po fazie kart. */
  cards: Card[];
}

export interface QuestionDto {
  id: string;
  category: string;
  text: string;
  answers: [string, string];
}

export interface PlayerResult {
  bet: Bet;
  /** Zakład przydzielony automatycznie (gracz nie zdążył). */
  auto: boolean;
  /** Kopia w ciemno: czyj zakład przejęto. */
  copiedFromId: string | null;
  /** Punkty z rundy (z mnożnikiem i `taxGain`). */
  gain: number;
  /** Część `gain` z karty „Podatek” (połowa zysku celu); bez karty 0. */
  taxGain: number;
}

export interface RoundResult {
  /** 0 = A, 1 = B */
  correct: 0 | 1;
  players: Record<string, PlayerResult>;
}

export interface RoundDto {
  number: number;
  totalRounds: number;
  tiebreak: boolean;
  participantIds: string[];
  question: QuestionDto;
  event: RoundEvent | null;
  phase: RoundPhase;
  /** ISO-8601, null w REVEALED. */
  phaseEndsAt: string | null;
  vaBanqueChooserId: string | null;
  vaBanqueTargetId: string | null;
  /** Obstawiają pierwsi: lider z eventu „Jawny zakład” (pierwszy) i cele kart „Zobacz zakład”. */
  openBettorIds: string[];
  /** Po zakładach mogą przejąć czyjś zakład: wylosowany z eventu (pierwszy) i gracze z kartą „Zobacz wszystkie”. */
  copyActorIds: string[];
  /** Jawny zakład lidera (event) — po fazie jawnego zakładu. Zakłady celów „Zobacz zakład” są w `MyStateDto.seenBets`. */
  openBets: Record<string, Bet>;
  /** Kto decyduje w fazie kart (gracze z kartami). */
  cardPlayerIds: string[];
  /** Kto już zagrał kartę albo spasował (wybór jest tajny do końca fazy). */
  cardDoneIds: string[];
  /** Zagrane karty — jawne po fazie kart. */
  playedCards: PlayedCard[];
  /** Muszą postawić 100/0 (event i karty). */
  allInIds: string[];
  /** Punkty z rundy x2 (event i karty). */
  doubledIds: string[];
  /** Cele kart Blitz — obstawiają do `blitzEndsAt`. */
  blitzIds: string[];
  /** Własny, wcześniejszy termin celów Blitz w bieżącej fazie. */
  blitzEndsAt: string | null;
  /** Kto już obstawił. */
  betPlayerIds: string[];
  /** Tylko w REVEALED. */
  result: RoundResult | null;
}

/** Publiczny stan pokoju, ten sam dla wszystkich. */
export interface GameStateDto {
  code: string;
  status: RoomStatus;
  /** Rośnie z każdą zmianą — starsze stany ignorujemy. */
  version: number;
  serverTime: string;
  hostId: string;
  /** W trakcie gry jej ustawienia, poza nią — ustawienia następnej gry (zmienia je host w lobby). */
  settings: GameSettings;
  /** W kolejności dołączenia. */
  players: PlayerDto[];
  /** Id graczy: wynik, potem trafienia 100/0. */
  ranking: string[];
  round: RoundDto | null;
  winnerIds: string[];
}

/** Prywatny stan właściciela tokenu. */
export interface MyStateDto {
  playerId: string;
  isHost: boolean;
  participating: boolean;
  /** Moje niezagrane karty. */
  hand: Card[];
  /** W fazie kart: mogę zagrać kartę albo spasować. */
  canPlayCard: boolean;
  /** W fazie kart: już zdecydowałem (karta albo pas). */
  cardDecided: boolean;
  /** Moja karta w tej rundzie (także w trakcie fazy kart). */
  myCard: PlayedCard | null;
  myBet: Bet | null;
  canBet: boolean;
  /** W fazie zakładów: własny zakład można cofnąć (`withdrawBet`), żeby go zmienić. */
  canChangeBet: boolean;
  /** Tylko 100/0 (va banque z eventu lub karty, „wszyscy va banque”). */
  mustGoAllIn: boolean;
  /** Obstawiam pierwszy, jawnie. */
  isOpenBettor: boolean;
  /** Mój własny, wcześniejszy termin (cel karty Blitz), dopóki nie obstawię. */
  myDeadline: string | null;
  canPickTarget: boolean;
  isCopyActor: boolean;
  /** W COPY_PICK: mogę przejąć czyjś zakład (`copyBet`) albo zostać przy swoim (`keepBet`). */
  canCopy: boolean;
  copyTargetId: string | null;
  /**
   * Zakłady widoczne tylko dla mnie: celów moich kart „Zobacz zakład” (po fazie jawnego zakładu)
   * i — gdy mam „Zobacz wszystkie” — wszystkich pozostałych w decyzji o kopii.
   */
  seenBets: Record<string, Bet>;
}

export interface CreateRoomResponse {
  code: string;
  playerId: string;
  playerToken: string;
}

/** Pokój na publicznej liście (strona główna). */
export interface RoomSummaryDto {
  /** Numer pokoju, "1"–"5". */
  code: string;
  status: RoomStatus;
  hostNick: string;
  playerCount: number;
  /** Nicki w kolejności dołączenia (host pierwszy). */
  playerNicks: string[];
  /** LOBBY albo FINISHED — można dołączyć. */
  joinable: boolean;
}

export interface JoinRoomResponse {
  playerId: string;
  playerToken: string;
}

export type ErrorCode =
  | 'ROOM_NOT_FOUND'
  | 'ROOM_CLOSED'
  | 'NICK_TAKEN'
  | 'UNAUTHORIZED'
  | 'NOT_HOST'
  | 'INVALID_STATE'
  | 'VALIDATION'
  | 'NOT_ENOUGH_PLAYERS'
  | 'GAME_IN_PROGRESS'
  | 'NOT_YOUR_TURN'
  | 'ALREADY_BET'
  | 'ROOM_LIMIT';

export interface ErrorDto {
  error: ErrorCode;
  message?: string;
}

/** Błąd z RoomApi. Poza kodami z kontraktu: NETWORK (brak połączenia), UNKNOWN. */
export interface ApiError {
  code: ErrorCode | 'NETWORK' | 'UNKNOWN';
  status: number;
  message?: string;
}
