import { shallowMount } from '@vue/test-utils'
import CardInfo from '@/components/CardInfo'
import card from './fixtures/card'

describe('CardInfo', () => {
  let props

  const build = () => {
    const wrapper = shallowMount(CardInfo, {
      propsData: props,
    })
    return {
      wrapper,
      poster_path: () => wrapper.find('.card-info__poster'),
      title: () => wrapper.find('.card-info__title'),
      release_date: () => wrapper.find('.card-info__date'),
      genre_id: () => wrapper.find('.card-info__genre'),
      populary: () => wrapper.find('.card-info__populary'),
      overview: () => wrapper.find('.card-info__overview'),
    }
  }

  beforeEach(() => {
    props = {
      card
    }
  })

  it('renders the component CardInfo', () => {

    const { wrapper } = build()
    
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main components via props', () => {
    
    const { poster_path, title, release_date, genre_id, populary, overview } = build()
    
    expect(poster_path().exists()).toBe(true)
    expect(poster_path().attributes().src).toBe(props.card.poster_url)

    expect(title().exists()).toBe(true)
    expect(title().text()).toBe(props.card.title)

    expect(release_date().exists()).toBe(true)
    expect(release_date().text()).toBe(props.card.release_date)

    expect(genre_id().exists()).toBe(true)
    expect(genre_id().text()).toBe(props.card.genre_id)

    expect(populary().exists()).toBe(true)
    expect(populary().text()).toBe(props.card.populary)

    expect(overview().exists()).toBe(true)
    expect(overview().text()).toBe(props.card.overview)
  })
})