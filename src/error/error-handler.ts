import * as Errors from './error-types';

export class ErrorHandler {
  public buildError(
    errorMessage: string,
    code: number = 0,
    statusCode: number = 0,
  ): Errors.UberEatsError | Errors.HttpError {
    if (statusCode !== 0 && code !== 0) {
      return this.buildErrorByHttpStatusCode(errorMessage, code, statusCode);
    }

    return new Errors.UberEatsError(errorMessage);
  }

  private buildErrorByHttpStatusCode(
    errorMessage: string,
    errorCode: number,
    errorStatusCode: number,
  ): Errors.HttpError {
    switch (errorStatusCode) {
      case 401:
        return new Errors.UnauthorizedError(errorMessage, errorCode, errorStatusCode);

      case 400:
        return new Errors.UberEatsError(errorMessage, errorCode, errorStatusCode);

      case 404:
        return new Errors.UberEatsError(errorMessage, errorCode, errorStatusCode);

      case 500:
        return new Errors.InternalServerError(errorMessage, errorCode, errorStatusCode);

      case 503:
        return new Errors.ServiceUnavailableError(errorMessage, errorCode, errorStatusCode);

      default:
        return new Errors.UnknownError(errorMessage, errorCode, errorStatusCode);
    }
  }
}
