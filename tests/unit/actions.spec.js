jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import cardFixture from './fixtures/card'

describe('store actions', () => {
  let commit

  beforeEach(() => {
    commit = jest.fn()
  })

  it('avaliator movie', async () => {
    
    const expectedCard = 'The Matrix'
    
    await actions.LIKE_MOVIE({ commit }, { title: expectedCard })
    await flushPromises()
    
    expect(api.likeMovie).toHaveBeenCalledWith(expectedCard)
    expect(commit).toHaveBeenCalledWith('SET_CARD', cardFixture)
  })
})