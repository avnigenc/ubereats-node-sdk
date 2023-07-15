import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import { Authentication, AuthenticationResponse } from '../model/authentication/authenticaton.model';

export class AuthenticationClient extends BaseClient {
  constructor(configOptions?: Configuration) {
    super('', { requestHost: 'login.uber.com', ...configOptions });
  }

  public authenticate(authentication: Authentication): Promise<AuthenticationResponse> {
    return this.post<AuthenticationResponse>(
      '/oauth/v2/token',
      authentication,
      {},
      {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    );
  }
}
