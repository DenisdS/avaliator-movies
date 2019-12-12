import cardFixture from '../../../tests/unit/fixtures/card'

export default {
  LIKE_MOVIE: jest.fn().mockResolvedValue(cardFixture)
}