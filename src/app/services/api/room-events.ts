import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError, GameStateDto } from './api.models';
import { roomUrl } from './room-api';

export type RoomEvent = { type: 'state'; data: GameStateDto } | { type: 'room-closed' };

/**
 * - `connecting` — pierwsze łączenie albo ponowne po zerwaniu (EventSource robi to sam),
 * - `open` — strumień działa,
 * - `closed` — brak aktywnego strumienia.
 */
export type ConnectionStatus = 'connecting' | 'open' | 'closed';

/** Strumień zdarzeń SSE pokoju (kontrakt: sekcja „SSE events”). */
@Injectable({
  providedIn: 'root',
})
export class RoomEvents {
  /**
   * Zimny Observable: każda subskrypcja otwiera własny EventSource, odsubskrybowanie go zamyka.
   * Kończy się po `room-closed`. Błąd (ApiError), gdy przeglądarka zrezygnuje z ponownego łączenia
   * (np. 401/404 — EventSource nie podaje statusu, przyczynę trzeba ustalić przez REST).
   */
  events(code: string, token: string, onStatus: (status: ConnectionStatus) => void): Observable<RoomEvent> {
    const url = `${roomUrl(code)}/events?token=${encodeURIComponent(token)}`;
    return new Observable<RoomEvent>((subscriber) => {
      onStatus('connecting');
      const es = new EventSource(url);
      es.onopen = () => onStatus('open');
      es.onerror = () => {
        if (es.readyState === EventSource.CLOSED) {
          onStatus('closed');
          const error: ApiError = { code: 'UNKNOWN', status: -1, message: 'Strumień zdarzeń został zamknięty' };
          subscriber.error(error);
        } else {
          onStatus('connecting');
        }
      };
      es.addEventListener('state', (e: MessageEvent) => {
        try {
          subscriber.next({ type: 'state', data: JSON.parse(e.data) as GameStateDto });
        } catch {
          console.error('Niepoprawne dane zdarzenia state', e.data);
        }
      });
      es.addEventListener('room-closed', () => {
        subscriber.next({ type: 'room-closed' });
        subscriber.complete();
      });
      return () => {
        es.close();
        onStatus('closed');
      };
    });
  }
}
