import HttpPostClientSpy from '@/data/test/mock-htto-client'
import { HttpPostClient } from './protocols/http/http-post-client'
import RemoteAuthentication from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with the correct URL', async () => {
    const url = 'any_url'
    const httpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClient)
    await sut.auth()
    expect(httpPostClient.url).toBe(url)
  })
})
