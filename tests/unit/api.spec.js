import flushPromises from 'flush-promises'
import nock from 'nock'
import api from '@/api'
import cardFixture from './fixtures/card'

describe('api', () => {
  it('receive movies for user avaliator', async () => {

    const request = nock('https://api.themoviedb.org/3')
      .get(`/discover/movie?api_key=42967963fa2a9e38812670e90648d790&language=pt-BR`)
      .reply(200, cardFixture)

    const result = await api.loadMovies()
    await flushPromises()

    expect(result).toEqual(cardFixture)
    expect(request.isDone()).toBe(true)
  })
})