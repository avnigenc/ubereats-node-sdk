import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { StoreClient } from '../clients';

const TOKEN: string = 'FAKE_TOKEN';

describe('StoreClient', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('StoreClient', () => {
    const storeClient = new StoreClient(TOKEN);

    it('storeClient should be defined', () => {
      expect(storeClient).toBeDefined();
    });
  });
});
