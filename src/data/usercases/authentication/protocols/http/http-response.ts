export enum HttpStatusCode {
  unauthorize = 401,
  noContent = 304,
  badRequest = 400,
  ok = 200,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
