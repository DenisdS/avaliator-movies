import mutations from '@/store/mutations'
import initialState from '@/store/state'
import card from './fixtures/card'

describe('mutations', () => {
  let state

  beforeEach(() => {
    state = { ...initialState }
  })

  it('sets new movie card', () => {

    const expectedCard = card

    mutations.SET_CARD(state, expectedCard)

    expect(state.card).toEqual(expectedCard)
    expect(state.card).not.toBe(expectedCard)
  })
})