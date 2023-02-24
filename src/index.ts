import type { StatusCode } from "hono/utils/http-status";

export type BoomErrorType = "unauthorized" | "forbidden" | "not_found";

export class Boom extends Error {
  statusCode: StatusCode;
  type: BoomErrorType;
  details?: any;
  isBoom: true;
  constructor(
    message: string,
    type: BoomErrorType,
    statusCode: StatusCode = 500,
    details?: any
  ) {
    super(message);
    this.type = type;
    this.statusCode = statusCode;
    this.details = details;
    this.isBoom = true;
  }

  static isBoom(error: any): error is Boom {
    return "isBoom" in error && error.isBoom;
  }

  static unauthorized() {
    return new Boom("unauthorized", "unauthorized", 401);
  }

  static forbidden() {
    return new Boom("forbidden", "forbidden", 403);
  }

  static notFound() {
    return new Boom("not found", "not_found", 404);
  }
}
