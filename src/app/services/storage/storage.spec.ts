import { TestBed } from '@angular/core/testing';

import { Storage } from './storage';

describe('Storage', () => {
  let service: Storage;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storage);
  });

  it('round-trips JSON values under the prefix', () => {
    service.set('player', { nick: 'Ala', score: 3 });
    expect(service.get('player')).toEqual({ nick: 'Ala', score: 3 });
    expect(localStorage.getItem('sto.player')).not.toBeNull();
  });

  it('returns null for missing or corrupted values', () => {
    expect(service.get('missing')).toBeNull();
    localStorage.setItem('sto.broken', '{not json');
    expect(service.get('broken')).toBeNull();
  });

  it('removes values', () => {
    service.set('x', 1);
    service.remove('x');
    expect(service.get('x')).toBeNull();
  });
});
