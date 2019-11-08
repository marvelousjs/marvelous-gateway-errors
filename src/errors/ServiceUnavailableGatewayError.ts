import { GatewayError } from '../classes/GatewayError';

export class ServiceUnavailableGatewayError extends GatewayError {
  name = 'ServiceUnavailableGatewayError';
  message = 'Service unavailable. Please try again.';
  description = 'The server is not ready to handle the request.';
  statusCode = 503;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
