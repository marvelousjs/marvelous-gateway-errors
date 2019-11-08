import { GatewayError } from '../classes/GatewayError';

export class NotImplementedGatewayError extends GatewayError {
  name = 'NotImplementedGatewayError';
  message = 'Not implemented. Please try again.';
  description = 'The request method is not supported by the server and cannot be handled.';
  statusCode = 501;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
