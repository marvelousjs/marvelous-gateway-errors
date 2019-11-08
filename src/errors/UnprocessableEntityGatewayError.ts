import { GatewayError } from '../classes/GatewayError';

export class UnprocessableEntityGatewayError extends GatewayError {
  name = 'UnprocessableEntityGatewayError';
  message = 'Unprocessable entity. Please try again.';
  description = 'The request was well-formed but was unable to be followed due to semantic errors.';
  statusCode = 422;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
