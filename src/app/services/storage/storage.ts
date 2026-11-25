import { Injectable } from '@angular/core';
import { CONFIG } from '../../app.properties';

/**
 * Typowany dostęp do localStorage (JSON). Wszystkie klucze dostają prefiks `CONFIG.STORAGE_PREFIX`.
 * Odczyt/zapis nie rzuca wyjątków — przy braku dostępu do storage (tryb prywatny, zablokowane dane)
 * `get` zwraca `null`, a `set` po cichu nic nie robi.
 */
@Injectable({
  providedIn: 'root',
})
export class Storage {
  get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(CONFIG.STORAGE_PREFIX + key);
      return raw == null ? null : (JSON.parse(raw) as T);
    } catch {
      return null;
    }
  }

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(CONFIG.STORAGE_PREFIX + key, JSON.stringify(value));
    } catch {
      // brak dostępu do storage — ignorujemy
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(CONFIG.STORAGE_PREFIX + key);
    } catch {
      // brak dostępu do storage — ignorujemy
    }
  }
}
