import { GatewayError } from '../classes/GatewayError';

export class UnauthorizedGatewayError extends GatewayError {
  name = 'UnauthorizedGatewayError';
  message = 'Unauthorized. Please try again.';
  description = 'The request requires user authentication.';
  statusCode = 401;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
