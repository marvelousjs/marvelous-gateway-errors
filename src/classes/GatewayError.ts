export class GatewayError extends Error {
  name: string;
  message: string;
  description: string;
  statusCode: number;
  constructor(message?: string) {
    super(message);
    if (message) {
      this.message = message;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
