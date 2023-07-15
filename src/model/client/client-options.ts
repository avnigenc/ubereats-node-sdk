export class Configuration {
  public useHttps?: boolean;
  public requestHost?: string;
  public timeout?: number;
  constructor(useHttps?: boolean, requestHost?: string, timeout?: number) {
    this.useHttps = useHttps;
    this.requestHost = requestHost;
    this.timeout = timeout;
  }
}

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}
