import { Card, GameSettings, RoundEvent } from './services/api/api.models';

/** Globalna konfiguracja gry: klucze localStorage, stałe, treści. */
export const CONFIG = {
  /** Prefiks wszystkich kluczy w localStorage — gra nie koliduje z innymi aplikacjami na tej samej domenie. */
  STORAGE_PREFIX: 'sto.',
  /** Minimalna liczba graczy (jak na backendzie). */
  MIN_PLAYERS: 2,
  /** Maksymalna liczba pokoi naraz (jak na backendzie) — pokoje mają numery 1–5. */
  MAX_ROOMS: 5,
  /** Co ile odświeżamy listę pokoi na stronie głównej. */
  ROOMS_REFRESH_MS: 3000,
  /** Czas na wybór ofiary va banque (`app.game.va-banque-pick` na backendzie) — tylko do paska postępu. */
  VA_BANQUE_PICK_SECONDS: 10,
  /** Czas na decyzję w kopii w ciemno (`app.game.copy-pick` na backendzie) — tylko do paska postępu. */
  COPY_PICK_SECONDS: 15,
  /** Czas na zakład w blitzu (`GameEngine.BLITZ_BET_SECONDS`; krótsze ustawienie hosta zostaje) — tylko do paska postępu. */
  BLITZ_BET_SECONDS: 15,
  /** Odstęp przed ponownym otwarciem SSE, gdy przeglądarka z niego zrezygnowała. */
  EVENTS_RESTART_DELAY_MS: 3000,
  /** Domyślne ustawienia gry w lobby (zakresy jak na backendzie). */
  DEFAULT_SETTINGS: {
    rounds: 10,
    eventChance: 50,
    betSeconds: 30,
    lastRoundDouble: false,
    events: ['VA_BANQUE', 'DOUBLE', 'OPEN_BET', 'BLIND_COPY', 'ALL_IN', 'BLITZ'],
    cards: [],
    cardSeconds: 15,
    /** Domyślny zestaw backendu (pierwszy z `/questions/scenarios`). */
    scenario: null as string | null,
  } satisfies GameSettings,
  /**
   * Karty graczy. `target: 'other'` — wycelowana w innego gracza, `'self'` — w siebie.
   * `effect` — krótki opis efektu na celu (po zagraniu, np. „Ania → Bartek: musi va banque”).
   */
  CARDS: {
    VA_BANQUE: {
      name: 'Va banque',
      icon: 'casino',
      target: 'other',
      description: 'Wskazany gracz musi postawić wszystko na jedną odpowiedź.',
      effect: 'musi va banque',
    },
    DOUBLE: {
      name: 'Podwójna stawka',
      icon: 'looks_two',
      target: 'self',
      description: 'Twoje punkty z tej rundy liczą się podwójnie.',
      effect: 'punkty ×2',
    },
    PEEK: {
      name: 'Zobacz zakład',
      icon: 'person_eye',
      target: 'other',
      description: 'Wskazany gracz obstawia pierwszy, a jego zakład widzisz tylko Ty.',
      effect: 'podgląda zakład',
    },
    COPY: {
      name: 'Zobacz wszystkie',
      icon: 'visibility',
      target: 'self',
      description:
        'Po zakładach widzisz zakłady wszystkich i decydujesz: zostajesz przy swoim albo przejmujesz czyjś.',
      effect: 'po zakładach może ściągnąć czyjś zakład',
    },
    BLITZ: {
      name: 'Blitz',
      icon: 'bolt',
      target: 'other',
      description: 'Wskazany gracz ma tylko 15 sekund na zakład.',
      effect: 'ma 15 s na zakład',
    },
    TAX: {
      name: 'Podatek',
      icon: 'percent',
      target: 'other',
      description:
        'Dostajesz dodatkowo połowę punktów, które wskazany gracz zdobędzie w tej rundzie. On nic nie traci.',
      effect: 'połowa zysku także dla zagrywającego',
    },
  } satisfies Record<
    Card,
    { name: string; icon: string; target: 'self' | 'other'; description: string; effect: string }
  >,
  /** Opisy eventów rundy. */
  EVENTS: {
    VA_BANQUE: {
      name: 'Va banque',
      icon: 'casino',
      description: 'Wylosowany gracz wskazuje kogoś, kto musi postawić wszystko na jedną odpowiedź.',
    },
    DOUBLE: {
      name: 'Podwójna stawka',
      icon: 'looks_two',
      description: 'Punkty z tej rundy liczą się podwójnie.',
    },
    OPEN_BET: {
      name: 'Jawny zakład',
      icon: 'campaign',
      description: 'Lider obstawia pierwszy, a wszyscy widzą jego zakład.',
    },
    BLIND_COPY: {
      name: 'Kopia w ciemno',
      icon: 'content_copy',
      description: 'Ktoś z was po obstawieniu może przejąć zakład innego gracza, nie wiedząc, co on postawił.',
    },
    ALL_IN: {
      name: 'Wszyscy va banque',
      icon: 'local_fire_department',
      description: 'Każdy musi postawić wszystko na jedną odpowiedź.',
    },
    BLITZ: {
      name: 'Blitz',
      icon: 'bolt',
      description: 'Na zakład jest tylko 15 sekund.',
    },
  } satisfies Record<RoundEvent, { name: string; icon: string; description: string }>,
} as const;
