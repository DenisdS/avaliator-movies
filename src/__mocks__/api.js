import cardFixture from '../../tests/unit/fixtures/card'

export default {
  likeMovie: jest.fn().mockResolvedValue(cardFixture)
}