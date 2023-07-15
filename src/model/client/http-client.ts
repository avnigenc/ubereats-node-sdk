import { Configuration, HttpMethod } from './client-options';

export abstract class HttpClient {
  public static DefaultOptions: Configuration = {
    useHttps: true,
    requestHost: 'api.uber.com',
    timeout: 180,
  };

  public clientOptions: Configuration;
  public client: any;

  protected constructor(configOptions?: Configuration) {
    this.clientOptions = { ...HttpClient.DefaultOptions, ...configOptions };
    this.initHttpClient(this.clientOptions);
  }

  public getBaseHttpRequestURL(): string {
    const scheme = this.clientOptions.useHttps ? 'https' : 'http';

    return `${scheme}://${this.clientOptions.requestHost}`;
  }

  public abstract initHttpClient(configOptions?: Configuration): void;
  public abstract httpRequest<T>(
    method: HttpMethod,
    path: string,
    queryParameters: NonNullable<unknown> | object,
    body: null | object,
    headers: Record<string, string>,
  ): Promise<T>;
}
