import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ErrorHandler, Errors } from '../error';
import { Configuration, HttpMethod } from '../model/client/client-options';
import { HttpClient } from '../model/client/http-client';

export class AxiosHttpClient extends HttpClient {
  public declare client: AxiosInstance;
  private errorHandler: ErrorHandler;

  public constructor(configOptions?: Configuration) {
    super(configOptions);
    this.errorHandler = new ErrorHandler();
  }

  public initHttpClient(configOptions?: Configuration): void {
    this.clientOptions = { ...HttpClient.DefaultOptions, ...configOptions };

    const httpClient = axios.create({
      baseURL: this.getBaseHttpRequestURL(),
      timeout: this.getRequestTimeoutInMilliseconds(),
      responseType: 'json',
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      validateStatus(status: number) {
        return status >= 200 && status < 300;
      },
    });

    httpClient.interceptors.response.use((response: any) => response.data);
    this.client = httpClient;
  }

  public httpRequest<T>(
    method: HttpMethod,
    path: string,
    queryParameters: NonNullable<unknown> | object,
    body: null | object,
    requestHeaders: Record<string, string>,
  ): Promise<T> {
    return this.client
      .request<void, T>({
        method,
        url: path,
        data: body,
        headers: requestHeaders,
        params: queryParameters,
      })
      .catch((errorThrown: AxiosError) => {
        return Promise.reject(this.transformError(errorThrown));
      });
  }

  private transformError(errorThrown: AxiosError): Errors.UberEatsError {
    const response: AxiosResponse | undefined = errorThrown.response;

    if (response !== undefined) {
      const status = this.adjustValue<number>(0, response.status);
      const errorCode = this.adjustValue<number>(0, response.data.error || response.data.code);
      const message = this.adjustValue<string>(
        errorThrown.message,
        response.data.error_description || response.data.message,
      );

      return this.errorHandler.buildError(message, errorCode, status);
    }

    if (errorThrown.message !== undefined) {
      return this.errorHandler.buildError(errorThrown.message);
    }

    return this.errorHandler.buildError(JSON.stringify(errorThrown, Object.getOwnPropertyNames(errorThrown)));
  }

  private getRequestTimeoutInMilliseconds(): number {
    return (this.clientOptions.timeout || 60) * 1000;
  }

  private adjustValue<T>(defaultValue: T, data: T): T {
    return data === undefined ? defaultValue : data;
  }
}
