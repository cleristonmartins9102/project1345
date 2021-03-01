import { AuthenticationParams } from '@/domain/usercases/authentication'
import { HttpPostClient } from './protocols/http/http-post-client'
import { HttpStatusCode } from './protocols/http/http-response'
import InvalidCredentialsError from '@/domain/errors/invalid-credentials0-error'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorize: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}

export default RemoteAuthentication
