import { AccountModel } from '../model/acoount-model'

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (paramns: AuthenticationParams): Promise<AccountModel>
}
