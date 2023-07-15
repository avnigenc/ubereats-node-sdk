import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthenticationClient } from '../clients';

describe('AuthenticationClient', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('AuthenticationClient', () => {
    const authenticationClient = new AuthenticationClient();

    it('authenticationClient should be defined', () => {
      expect(authenticationClient).toBeDefined();
    });
  });
});
