import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { OrderClient } from '../clients';
import { MockGetOrderDetailsResponse } from './fixtures/order.fixture';

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

    it('should get order', async () => {
      vi.spyOn(orderClient as any, 'get').mockResolvedValue(MockGetOrderDetailsResponse);

      await orderClient.getOrder('');

      expect(orderClient['get']).toHaveBeenCalledTimes(1);
    });
  });
});
