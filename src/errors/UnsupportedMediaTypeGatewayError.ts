import { GatewayError } from '../classes/GatewayError';

export class UnsupportedMediaTypeGatewayError extends GatewayError {
  name = 'UnsupportedMediaTypeGatewayError';
  message = 'Unsupported media type. Please try again.';
  description = 'The media format of the requested data is not supported by the server, so the server is rejecting the request.';
  statusCode = 415;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
