import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { OrderClient } from '../clients';

const TOKEN: string = 'FAKE_TOKEN';

describe('OrderClient', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('OrderClient', () => {
    const orderClient = new OrderClient(TOKEN);

    it('orderClient should be defined', () => {
      expect(orderClient).toBeDefined();
    });
  });
});
