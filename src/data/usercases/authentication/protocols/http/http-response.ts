export enum HttpStatusCode {
  unauthorize = 401,
  noContent = 304
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
