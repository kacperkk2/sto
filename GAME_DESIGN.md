# Sto — mechanika gry (v1)

Gra online i multiplayer: każdy gracz gra na swoim telefonie. Synchronizacją zajmie się backend Spring Boot (planowany). Ten dokument jest źródłem prawdy dla frontu i backendu.

## Rozgrywka
- **Lobby:** host tworzy pokój, gracze wybierają go z listy pokoi na stronie głównej. Pokoje mają numery 1–5 (maksymalnie 5 naraz); zamknięty albo wygasły pokój zwalnia numer. Minimum **2 graczy**. Dołączyć można tylko w lobby albo po zakończonej grze, nie w trakcie.
- **Kolejna runda:** host przechodzi dalej przyciskiem po ekranie wyników, więc jest czas na rozmowę.
- **Ustawienia hosta** (zapisywane w pokoju na bieżąco; wszyscy widzą ich skrót pod listą graczy w lobby, a opisy eventów pod ikoną ⓘ):
  - liczba rund (domyślnie 10),
  - częstotliwość eventów (0–100%, domyślnie 50%),
  - które eventy biorą udział w losowaniu (domyślnie wszystkie; bez żadnego — same zwykłe rundy, „ostatnia runda x2” działa niezależnie),
  - czas na zakład (domyślnie 30 s),
  - „ostatnia runda x2” (domyślnie wyłączone),
  - które karty dostają gracze (domyślnie żadne, patrz „Karty”).
- **Pytania:** losowane bez powtórzeń z wybranego przez hosta zestawu na backendzie (`sto-backend/src/main/resources/questions/*.json`, jeden plik = jeden zestaw), bo front nie może znać poprawnej odpowiedzi. Historia zagranych pytań hosta jest prowadzona osobno dla każdego zestawu.

## Runda
1. **Ogłoszenie:** wylosowany event (lub brak eventu) i pytanie.
2. **Faza kart (czas z ustawień, domyślnie 15 s):** tylko gdy ktoś ma jeszcze karty, patrz „Karty”.
3. **Faza zakładów (timer):** każdy rozdziela 100 pkt między A i B, w krokach co 5 pkt. Kto nie zdąży, dostaje automatycznie 50/50 (wyjątek: va banque, patrz niżej). Postawiony zakład można cofnąć do zmiany („Zmień”) — gracz znów liczy się jako nieobstawiony; gdy wszyscy obstawią, runda od razu przechodzi do odkrycia.
4. **Odkrycie:** pokazujemy zakłady wszystkich i poprawną odpowiedź.
5. **Punktacja:**
   - gracz **zyskuje** to, co postawił na poprawną odpowiedź; wynik startuje od 0 i nikt nie odpada,
   - nie ma żadnych ukrytych bonusów — jedyne modyfikatory to jawne x2 (event albo karta „Podwójna stawka”) i jawna karta „Podatek”.
6. **Ranking** po każdej rundzie. Po ostatniej rundzie wygrywa najwyższy wynik.

### Remis
Gracze z remisem na pierwszym miejscu grają dogrywkę: jedno pytanie bez eventu, wygrywa wyższy zysk. Jeśli i tu jest remis, kolejne pytanie.

## Eventy rundy
Najwyżej jeden event na rundę, losowany z prawdopodobieństwem ustawionym przez hosta.

| Event | Działanie |
|---|---|
| **Va banque** | Gracz wylosowany bez powtórzeń (pula resetuje się, gdy wszyscy byli) wskazuje innego gracza. Wskazany musi postawić 100/0. |
| **Podwójna stawka** | Punkty z rundy x2. |
| **Jawny zakład** | **Lider** rankingu obstawia pierwszy, z osobnym timerem. Jego zakład widzą wszyscy, a dopiero potem reszta obstawia. |
| **Kopia w ciemno** | Wylosowany gracz obstawia jak wszyscy, ale wie, że po zakładach dostanie wybór. Gdy minie czas albo wszyscy obstawią, ma dodatkowy czas, żeby przejąć zakład wskazanego gracza (nie znając go) albo zostać przy swoim. Reszta czeka. Odkrycie następuje przy wynikach. |
| **Wszyscy va banque** | Każdy musi postawić 100/0. |
| **Blitz** | Czas na zakład skrócony do 15 s. Poza tym zwykła runda. |

### Szczegóły eventów
- **Va banque:**
  - wskazujący ma 10 s na wybór, inaczej ofiara jest losowa,
  - ofiara widzi, że jest wskazana,
  - jeśli ofiara nie zdąży obstawić, losujemy jej 100/0 albo 0/100.
- **Podwójna stawka:** jeśli host włączył „ostatnia runda x2”, ostatnia runda jest zawsze podwójna i nie losujemy w niej innego eventu.
- **Jawny zakład:**
  - jeśli kilku graczy ma ten sam najwyższy wynik (np. w 1. rundzie), losujemy jednego z nich,
  - zakład lidera jest wiążący.
- **Kopia w ciemno:**
  - cel **nie wie**, że jest kopiowany; dowiaduje się dopiero przy wynikach,
  - na decyzję wylosowany ma 15 s; jeśli nie zdąży, zostaje przy swoim zakładzie,
  - wszyscy od początku rundy wiedzą, kto jest wylosowany; w trakcie decyzji czekają na niego,
  - brakujące zakłady są uzupełniane (50/50) przed decyzją, więc przejąć można też zakład automatyczny.
- **Wszyscy va banque:** kto nie zdąży obstawić, dostaje losowo 100/0 albo 0/100 (jak ofiara va banque).
- **Blitz:** jeśli host ustawił krótszy czas na zakład niż 15 s, zostaje ustawienie hosta.
- **Wybór graczy:** gracza w eventach losujemy spośród aktywnych graczy.

## Karty
Karty są oparte na eventach, ale nie działają 1:1 jak one. Gracz zagrywa je świadomie, na siebie albo na innego gracza. Opisy kart w UI są osobne od opisów eventów (`CONFIG.CARDS`).

- **Ręka:** host wybiera, które karty są w grze (lista niezależna od eventów, domyślnie pusta). Na start gry każdy dostaje po 1 sztuce każdej wybranej karty. Kart nie dobiera się w trakcie gry.
- **Faza kart:** pierwsza faza każdej zwykłej rundy, zaraz po ogłoszeniu pytania i eventu.
  - Trwa tyle, ile ustawił host (`cardSeconds`, 5–60 s, domyślnie 15 s). Kończy się wcześniej, gdy wszyscy z kartami zdecydowali; jest pomijana, gdy nikt nie ma już kart.
  - Każdy gracz z kartami zagrywa najwyżej 1 kartę albo pasuje. Brak decyzji do końca czasu oznacza pas.
  - **W ciemno:** w trakcie fazy widać tylko, kto już zdecydował. Po fazie wszystkie zagrania są jawne (kto, co, na kogo).
- **Dogrywka:** bez kart.
- **Ręce są jawne:** w rankingu widać niezagrane karty każdego gracza. Zmieniają się dopiero po fazie kart, żeby nie zdradzić zagrania.

| Karta | Cel | Działanie |
|---|---|---|
| **Va banque** | inny gracz | Cel musi postawić 100/0. Jeśli nie zdąży, losujemy mu 100/0 albo 0/100. |
| **Podwójna stawka** | ja | Moje punkty z rundy x2. |
| **Zobacz zakład** (`PEEK`) | inny gracz | Cel obstawia pierwszy i wiążąco, ale jego zakład widzi **tylko** zagrywający (reszta i tak wie z jawnych kart, kto kogo podgląda). |
| **Zobacz wszystkie** (`COPY`) | ja | Po zakładach widzę zakłady wszystkich i mam 15 s: zostaję przy swoim albo przejmuję czyjś. Inni nie widzą tych zakładów. |
| **Blitz** | inny gracz | Cel ma tylko 15 s na zakład (krótsze ustawienie hosta zostaje), potem dostaje automatyczny zakład. Reszta ma normalny czas. |
| **Podatek** (`TAX`) | inny gracz | Oprócz swojego zysku dostaję połowę (zaokrągloną w dół) zysku celu z tej rundy. Cel nic nie traci. |

„Wszyscy va banque” nie ma wersji karty.

### Rozstrzyganie
- **Kumulacja:**
  - ten sam efekt kilka razy na tej samej osobie (kilka takich samych kart albo karta i event) działa jak jeden,
  - różne efekty na tej samej osobie się sumują, np. Va banque + Zobacz zakład + Blitz: obstawia pierwsza, tylko 100/0, w 15 s, a jej zakład widzi podglądający,
  - kilku graczy może podglądać ten sam cel — każdy z nich widzi jego zakład.
- **Karta bez efektu** (np. Podwójna stawka w rundzie podwójnej) przepada, ale jest zużyta.
- **Kolejność faz:** karty → (wybór ofiary va banque) → (jawne zakłady, gdy ktoś obstawia jawnie) → zakłady → (decyzja o kopii, gdy ktoś kopiuje) → odkrycie.
- **Odpowiedzi ukryte przed zakładami:** w fazie kart i przy wyborze ofiary va banque widać tylko pytanie — odpowiedzi pojawiają się dopiero, gdy zaczynają się zakłady.
- **Kilku obstawiających pierwszych** (lider z eventu Jawny zakład i cele kart Zobacz zakład) obstawia jednocześnie i nie widzą się nawzajem. W fazie zakładów zakład lidera widzą wszyscy, a zakład celu karty tylko podglądający.
- **Kilku kopiujących** (wylosowany z eventu Kopia w ciemno i gracze z kartą Zobacz wszystkie) decyduje równolegle. Wylosowany z eventu nadal kopiuje w ciemno; kto zagrał Zobacz wszystkie, widzi zakłady. Kopia bierze **oryginalny** zakład celu, bez łańcuchów: dwie osoby kopiujące siebie nawzajem dostają nawzajem swoje oryginalne zakłady.
- **Mnożnik x2** dotyczy tego, kto go ma, także gdy skopiował cudzy zakład.
- **Podatek:** liczymy połowę zysku celu z jego zakładu, razem z jego x2, ale bez jego własnego podatku (bez łańcuchów). Mój x2 nie mnoży podatku. Kilku graczy może opodatkować ten sam cel — każdy dostaje połowę.
- **Blitz:** własny termin celu obowiązuje w fazie, w której cel obstawia (jawny zakład albo zwykłe zakłady). Po nim cel nie może już zmienić zakładu.

## Model danych (szkic)
- `Question { id, category, text, answers: [A, B], correct: 0 | 1 }` — na backendzie, front dostaje pytanie bez `correct`.
- Pełny kontrakt API: `sto-backend/docs/API.md`.
- `GameSettings { rounds, eventChance, betSeconds, lastRoundDouble, events: RoundEvent[], cards: Card[], cardSeconds }`
- `RoundEvent = 'VA_BANQUE' | 'DOUBLE' | 'OPEN_BET' | 'BLIND_COPY' | 'ALL_IN' | 'BLITZ' | null`
- `Card = 'VA_BANQUE' | 'DOUBLE' | 'PEEK' | 'COPY' | 'BLITZ' | 'TAX'`
- `Bet { playerId, onA, onB }` z warunkiem `onA + onB = 100`.
- `Round { question, event, phase, vaBanqueChooserId?, vaBanqueTargetId?, openBettorIds, copyActorIds, playedCards, bets }`

## Następne kroki
1. ~~Backend Spring Boot: lobby, silnik gry, timery, SSE~~ — gotowe w `sto-backend`.
2. Widoki Angular: lobby, zakład (suwak 0–100), odkrycie, ranking, w oparciu o `sto-backend/docs/API.md`.
