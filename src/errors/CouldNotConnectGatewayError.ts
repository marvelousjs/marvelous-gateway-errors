import { GatewayError } from '../classes/GatewayError';

export class CouldNotConnectGatewayError extends GatewayError {
  name = 'CouldNotConnectGatewayError';
  message = 'Could not connect to server. Please try again.';
  description = 'The server is unreachable due to network issue.';
  statusCode = 0;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
