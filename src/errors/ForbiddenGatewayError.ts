import { GatewayError } from '../classes/GatewayError';

export class ForbiddenGatewayError extends GatewayError {
  name = 'ForbiddenGatewayError';
  message = 'Forbidden. Please try again.';
  description = 'The client does not have access rights to the content.';
  statusCode = 403;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
