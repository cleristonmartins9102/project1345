import { AuthenticationParams } from '../../domain/usercases/authentication'
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}
