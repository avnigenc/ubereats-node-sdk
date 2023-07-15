export class UberEatsError extends Error {
  public code: number;
  public statusCode: number;

  constructor(message: string, code: number = 0, statusCode: number = 0) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;

    Object.setPrototypeOf(this, UberEatsError.prototype);
    this.setUpStackTrace();
  }

  protected setUpStackTrace() {
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HttpError extends UberEatsError {
  constructor(message: string, code: number, statusCode: number) {
    super(message, code, statusCode);
    Object.setPrototypeOf(this, HttpError.prototype);
    this.setUpStackTrace();
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string, code: number, statusCode: number) {
    super(message, code, statusCode);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
    this.setUpStackTrace();
  }
}

export class InternalServerError extends HttpError {
  constructor(message: string, code: number, statusCode: number) {
    super(message, code, statusCode);
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.setUpStackTrace();
  }
}

export class ServiceUnavailableError extends HttpError {
  constructor(message: string, code: number, statusCode: number) {
    super(message, code, statusCode);
    Object.setPrototypeOf(this, ServiceUnavailableError.prototype);
    this.setUpStackTrace();
  }
}

export class UnknownError extends HttpError {
  constructor(message: string, code: number, statusCode: number) {
    super(message, code, statusCode);
    Object.setPrototypeOf(this, UnknownError.prototype);
    this.setUpStackTrace();
  }
}
