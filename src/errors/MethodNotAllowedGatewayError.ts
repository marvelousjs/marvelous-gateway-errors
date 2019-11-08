import { GatewayError } from '../classes/GatewayError';

export class MethodNotAllowedGatewayError extends GatewayError {
  name = 'MethodNotAllowedGatewayError';
  message = 'Method not allowed. Please try again.';
  description = 'The request method is known by the server but has been disabled and cannot be used.';
  statusCode = 405;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
