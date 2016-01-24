// Http error object for returning useful json responses to client
export class HttpError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}

// Custom error object for 404 Not Found status
export class NotFoundError extends HttpError {
  constructor(message) {
    super(message || 'Not Found', 404);
  }
}
