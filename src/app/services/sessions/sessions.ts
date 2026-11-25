import { inject, Injectable } from '@angular/core';
import { GameSettings } from '../api/api.models';
import { normalizeRoomCode } from '../api/room-api';
import { Storage } from '../storage/storage';

/** Tożsamość gracza w pokoju (z create/join). */
export interface RoomSession {
  code: string;
  playerId: string;
  playerToken: string;
}

const SESSIONS_KEY = 'sessions';
const NICK_KEY = 'nick';
const SETTINGS_KEY = 'settings';
const PLAYED_QUESTIONS_KEY = 'playedQuestions';

/** Sesje pokoi, ostatni nick, ustawienia gry hosta i zagrane przez niego pytania — w localStorage. */
@Injectable({
  providedIn: 'root',
})
export class Sessions {
  private readonly storage = inject(Storage);

  all(): RoomSession[] {
    const sessions = this.storage.get<RoomSession[]>(SESSIONS_KEY);
    return Array.isArray(sessions) ? sessions : [];
  }

  get(code: string): RoomSession | null {
    const normalized = normalizeRoomCode(code);
    return this.all().find((s) => s.code === normalized) ?? null;
  }

  save(session: RoomSession): void {
    const normalized = { ...session, code: normalizeRoomCode(session.code) };
    this.storage.set(SESSIONS_KEY, [...this.all().filter((s) => s.code !== normalized.code), normalized]);
  }

  remove(code: string): void {
    const normalized = normalizeRoomCode(code);
    this.storage.set(
      SESSIONS_KEY,
      this.all().filter((s) => s.code !== normalized),
    );
  }

  get nick(): string {
    return this.storage.get<string>(NICK_KEY) ?? '';
  }

  set nick(nick: string) {
    this.storage.set(NICK_KEY, nick.trim());
  }

  get settings(): Partial<GameSettings> {
    return this.storage.get<Partial<GameSettings>>(SETTINGS_KEY) ?? {};
  }

  set settings(settings: Partial<GameSettings>) {
    this.storage.set(SETTINGS_KEY, settings);
  }

  /**
   * ID pytań zagranych w grach, które hostowałem, osobno dla każdego zestawu pytań —
   * backend ich nie losuje (dopóki w zestawie są inne).
   */
  get playedQuestions(): Record<string, string[]> {
    const stored = this.storage.get<Record<string, unknown>>(PLAYED_QUESTIONS_KEY);
    if (!stored || typeof stored !== 'object' || Array.isArray(stored)) {
      return {};
    }
    const result: Record<string, string[]> = {};
    for (const [scenario, ids] of Object.entries(stored)) {
      if (Array.isArray(ids)) {
        result[scenario] = ids.filter((id): id is string => typeof id === 'string');
      }
    }
    return result;
  }

  playedQuestionIds(scenario: string): string[] {
    return this.playedQuestions[scenario] ?? [];
  }

  setPlayedQuestionIds(scenario: string, ids: string[]): void {
    const { [scenario]: _, ...others } = this.playedQuestions;
    this.storage.set(PLAYED_QUESTIONS_KEY, ids.length ? { ...others, [scenario]: ids } : others);
  }

  /** Dopisuje pytanie do historii zestawu; `false`, gdy już w niej było. */
  addPlayedQuestion(scenario: string, id: string): boolean {
    const ids = this.playedQuestionIds(scenario);
    if (ids.includes(id)) {
      return false;
    }
    this.setPlayedQuestionIds(scenario, [...ids, id]);
    return true;
  }
}
