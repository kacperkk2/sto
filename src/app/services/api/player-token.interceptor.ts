import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Sessions } from '../sessions/sessions';
import { roomUrl } from './room-api';

export const PLAYER_TOKEN_HEADER = 'X-Player-Token';

/**
 * Dokłada nagłówek X-Player-Token z sesji danego pokoju do żądań na ten pokój
 * (`{apiUrl}/rooms/{code}...`). Token z innego pokoju i tak dałby 401, więc go nie wysyłamy.
 */
export const playerTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers.has(PLAYER_TOKEN_HEADER)) {
    return next(req);
  }
  const url = req.url.toUpperCase();
  const session = inject(Sessions)
    .all()
    .find((s) => {
      const base = roomUrl(s.code).toUpperCase();
      return url === base || url.startsWith(base + '/');
    });
  return next(session ? req.clone({ setHeaders: { [PLAYER_TOKEN_HEADER]: session.playerToken } }) : req);
};
