import { Authentication, AuthenticationParams } from '@/domain/usercases/authentication'
import { HttpPostClient } from './protocols/http/http-post-client'
import { HttpStatusCode } from './protocols/http/http-response'
import InvalidCredentialsError from '@/domain/errors/invalid-credentials0-error'
import UnexpectedError from '@/domain/errors/unexpected-error'
import { AccountModel } from '@/domain/model/acoount-model'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorize: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export default RemoteAuthentication
