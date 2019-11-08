import { GatewayError } from '../classes/GatewayError';

export class TooManyRequestsGatewayError extends GatewayError {
  name = 'TooManyRequestsGatewayError';
  message = 'Too many requests. Please try again.';
  description = 'The client has sent too many requests in a given amount of time.';
  statusCode = 429;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
