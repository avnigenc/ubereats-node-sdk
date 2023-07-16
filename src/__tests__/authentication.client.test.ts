import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { AuthenticationClient } from '../clients';
import { Authentication, GrantType, Scope } from '../model/authentication/authenticaton.model';
import { MockAuthenticationResponse } from './fixtures/authenticaton.fixture';

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

    it('should get authentication token', async () => {
      vi.spyOn(authenticationClient as any, 'post').mockResolvedValue(MockAuthenticationResponse);

      const authentication = new Authentication('FAKE', 'FAKE', GrantType.ClientCredentials, [Scope.Store]);

      await authenticationClient.authenticate(authentication);

      expect(authenticationClient['post']).toHaveBeenCalledTimes(1);
    });
  });
});
