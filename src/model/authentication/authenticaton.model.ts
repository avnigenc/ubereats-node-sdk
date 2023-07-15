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
  public scope: Scope[];

  constructor(client_secret: string, client_id: string, grant_type: string, scope: Scope[]) {
    this.client_secret = client_secret;
    this.client_id = client_id;
    this.grant_type = grant_type;
    this.scope = scope;
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
