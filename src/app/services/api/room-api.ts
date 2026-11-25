import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CONFIG } from '../../app.properties';
import {
  ApiError,
  Bet,
  Card,
  CreateRoomResponse,
  ErrorDto,
  GameSettings,
  GameStateDto,
  JoinRoomResponse,
  MyStateDto,
  RoomSummaryDto,
  ScenarioDto,
} from './api.models';

/**
 * Klient REST pokoi (kontrakt: sto-backend/docs/API.md). Token gracza dokłada `playerTokenInterceptor`
 * z sesji pokoju, więc przed metodami „gracza pokoju” sesja musi być zapisana (`Sessions.save`).
 * Błędy są mapowane na `ApiError`.
 */
@Injectable({
  providedIn: 'root',
})
export class RoomApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/rooms`;

  listRooms(): Observable<RoomSummaryDto[]> {
    return this.handle(this.http.get<RoomSummaryDto[]>(this.baseUrl));
  }

  createRoom(nick: string): Observable<CreateRoomResponse> {
    return this.handle(this.http.post<CreateRoomResponse>(this.baseUrl, { nick }));
  }

  joinRoom(code: string, nick: string): Observable<JoinRoomResponse> {
    return this.handle(this.http.post<JoinRoomResponse>(`${roomUrl(code)}/players`, { nick }));
  }

  getState(code: string): Observable<GameStateDto> {
    return this.handle(this.http.get<GameStateDto>(roomUrl(code)));
  }

  getMe(code: string): Observable<MyStateDto> {
    return this.handle(this.http.get<MyStateDto>(`${roomUrl(code)}/me`));
  }

  updateSettings(code: string, settings: Partial<GameSettings>): Observable<GameStateDto> {
    return this.handle(this.http.put<GameStateDto>(`${roomUrl(code)}/settings`, settings));
  }

  /** `excludedQuestionIds` — pytania wybranego zestawu z poprzednich gier hosta, backend ich nie losuje. */
  startGame(code: string, settings: Partial<GameSettings>, excludedQuestionIds: string[]): Observable<GameStateDto> {
    return this.handle(
      this.http.post<GameStateDto>(`${roomUrl(code)}/game`, { ...settings, excludedQuestionIds }),
    );
  }

  /** Zestawy pytań backendu; pierwszy jest domyślny. */
  scenarios(): Observable<ScenarioDto[]> {
    return this.handle(this.http.get<ScenarioDto[]>(`${environment.apiUrl}/questions/scenarios`));
  }

  /** Po zakończonej grze — z powrotem do lobby (ustawienia pokoju zostają). */
  returnToLobby(code: string): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/lobby`, null));
  }

  nextRound(code: string): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/next`, null));
  }

  /** Faza kart: `targetId` tylko dla kart wycelowanych w innego gracza. */
  playCard(code: string, card: Card, targetId: string | null): Observable<GameStateDto> {
    return this.handle(
      this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/card`, { card, targetId }),
    );
  }

  passCard(code: string): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/card/pass`, {}));
  }

  pickVaBanqueTarget(code: string, targetId: string): Observable<GameStateDto> {
    return this.handle(
      this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/va-banque-target`, { targetId }),
    );
  }

  placeBet(code: string, bet: Bet): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/bet`, bet));
  }

  withdrawBet(code: string): Observable<GameStateDto> {
    return this.handle(this.http.delete<GameStateDto>(`${roomUrl(code)}/rounds/current/bet`));
  }

  copyBet(code: string, targetId: string): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/copy`, { targetId }));
  }

  keepBet(code: string): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/rounds/current/keep`, {}));
  }

  /** Tylko dev (backend z `APP_DEV_BOTS_ENABLED=true`): sztuczni gracze, zawsze 50/50. */
  addBots(code: string, count: number): Observable<GameStateDto> {
    return this.handle(this.http.post<GameStateDto>(`${roomUrl(code)}/bots`, { count }));
  }

  closeRoom(code: string): Observable<void> {
    return this.handle(this.http.delete<void>(roomUrl(code)));
  }

  private handle<T>(request: Observable<T>): Observable<T> {
    return request.pipe(catchError((err: unknown) => throwError(() => toApiError(err))));
  }
}

export function roomUrl(code: string): string {
  return `${environment.apiUrl}/rooms/${encodeURIComponent(normalizeRoomCode(code))}`;
}

export function normalizeRoomCode(code: string): string {
  return (code ?? '').trim().toUpperCase();
}

export function toApiError(err: unknown): ApiError {
  if (!(err instanceof HttpErrorResponse)) {
    return { code: 'UNKNOWN', status: -1, message: String(err) };
  }
  if (err.status === 0) {
    return { code: 'NETWORK', status: 0, message: err.message };
  }
  const body = err.error as Partial<ErrorDto> | null;
  if (body && typeof body === 'object' && typeof body.error === 'string') {
    return { code: body.error, status: err.status, message: body.message };
  }
  return { code: 'UNKNOWN', status: err.status, message: err.message };
}

export function apiErrorMessage(error: ApiError): string {
  switch (error.code) {
    case 'ROOM_NOT_FOUND':
    case 'ROOM_CLOSED':
      return 'Pokój nie istnieje lub został zamknięty';
    case 'NICK_TAKEN':
      return 'Ten nick jest już zajęty';
    case 'UNAUTHORIZED':
      return 'Sesja w pokoju wygasła';
    case 'NOT_HOST':
      return 'Tylko host może to zrobić';
    case 'GAME_IN_PROGRESS':
      return 'Gra już trwa — dołączysz po jej zakończeniu';
    case 'NOT_ENOUGH_PLAYERS':
      return 'Potrzeba co najmniej 2 graczy';
    case 'NOT_YOUR_TURN':
    case 'INVALID_STATE':
      return 'Ta akcja nie jest teraz możliwa';
    case 'ALREADY_BET':
      return 'Już obstawiłeś w tej rundzie';
    case 'VALIDATION':
      return 'Niepoprawne dane';
    case 'ROOM_LIMIT':
      return `Wszystkie ${CONFIG.MAX_ROOMS} pokoi są zajęte`;
    case 'NETWORK':
      return 'Brak połączenia z serwerem';
    default:
      return 'Coś poszło nie tak';
  }
}
