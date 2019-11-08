import { GatewayError } from '../classes/GatewayError';

export class BadRequestGatewayError extends GatewayError {
  name = 'BadRequestGatewayError';
  message = 'Bad request. Please try again.';
  description = 'The server could not understand the request due to invalid syntax.';
  statusCode = 400;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
