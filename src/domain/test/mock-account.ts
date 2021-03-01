import { AuthenticationParams } from '../../domain/usercases/authentication'
import faker from 'faker'
import { AccountModel } from '../model/acoount-model'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.random.uuid()
  }
}
