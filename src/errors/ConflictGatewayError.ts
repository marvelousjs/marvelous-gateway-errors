import { GatewayError } from '../classes/GatewayError';

export class ConflictGatewayError extends GatewayError {
  name = 'ConflictGatewayError';
  message = 'Conflict. Please try again.';
  description = 'The request conflicts with the current state of the server.';
  statusCode = 409;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
