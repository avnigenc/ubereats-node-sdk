import { ErrorHandler, Errors } from '../error';
import { Configuration, HttpMethod } from '../model/client/client-options';
import { HttpClient } from '../model/client/http-client';
import { AxiosHttpClient } from './http.client';

export abstract class BaseClient {
  protected httpClient: HttpClient;
  protected errorHandler: ErrorHandler;
  protected token: string;

  protected constructor(token: string, configOptions?: Configuration) {
    this.errorHandler = new ErrorHandler();
    this.token = token;
    this.httpClient = new AxiosHttpClient(configOptions);
  }

  protected get<T>(path: string, queryParameters: object = {}): Promise<T> {
    return this.doRequest(HttpMethod.GET, path, queryParameters, null, null);
  }

  protected post<T>(path: string, body: object, queryParameters: object = {}, headers: object = {}): Promise<T> {
    return this.doRequest(HttpMethod.POST, path, queryParameters, body, headers);
  }

  protected put<T>(path: string, body: object, queryParameters: object = {}): Promise<T> {
    return this.doRequest(HttpMethod.PUT, path, queryParameters, body, null);
  }

  protected patch<T>(path: string, body: object, queryParameters: object = {}): Promise<T> {
    return this.doRequest(HttpMethod.PATCH, path, queryParameters, null, null);
  }

  protected delete<T>(path: string, body: object, queryParameters: object = {}): Promise<T> {
    return this.doRequest(HttpMethod.DELETE, path, queryParameters, null, null);
  }

  private doRequest<T>(
    method: HttpMethod,
    path: string,
    queryParameters: object,
    body: null | object,
    headers: null | object,
  ): Promise<T> {
    return this.httpClient
      .httpRequest<T>(method, path, queryParameters, body, { ...this.getComposedHeaders(), ...headers })
      .then((response: T) => response)
      .catch((error: Errors.UberEatsError) => {
        return Promise.reject(error);
      });
  }

  private getComposedHeaders(): Record<string, string> {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    };
  }
}
