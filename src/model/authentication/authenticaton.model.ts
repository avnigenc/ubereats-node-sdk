export enum GrantType {
  ClientCredentials = 'client_credentials',
  AuthorizationCode = 'authorization_code',
}

export enum Scope {
  Store = 'eats.store',
  StoreStatusWrite = 'eats.store.status.write',
  Order = 'eats.order',
  OrdersRead = 'eats.store.orders.read',
  Report = 'eats.report',
  PosProvisioning = 'eats.pos_provisioning',
}

export class Authentication {
  public client_secret: string;
  public client_id: string;
  public grant_type: string;
  public scope: string;

  constructor(clientSecret: string, clientId: string, grantType: GrantType, scope: Scope[]) {
    this.client_secret = clientSecret;
    this.client_id = clientId;
    this.grant_type = grantType;
    this.scope = scope.join(' ');
  }
}

export interface AuthenticationResponse {
  last_authenticated: number;
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
  refresh_token: string;
}
