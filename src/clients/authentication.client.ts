import { Configuration } from '../model/client/client-options';

import { BaseClient } from '../http';
import { AuthenticationResponse, GrantType, Scope } from '../model/authentication/authenticaton.model';

export class AuthenticationClient extends BaseClient {
  private readonly clientId: string;
  private readonly clientSecret: string;

  constructor(clientId: string, clientSecret: string, configOptions?: Configuration) {
    super('', { requestHost: 'login.uber.com', ...configOptions });
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  public authenticate(scopes: Scope[]): Promise<AuthenticationResponse> {
    return this.post<AuthenticationResponse>(
      '/oauth/v2/token',
      {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        grant_type: GrantType.ClientCredentials,
        scope: scopes.join(' '),
      },
      {},
      {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    );
  }
}
