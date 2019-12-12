import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import CardView from '@/views/CardView'
import LikeButton from '@/components/LikeButton.vue'
import DislikeButton from '@/components/DislikeButton.vue'
import SkipButton from '@/components/SkipButton.vue'
import CardInfo from '@/components/CardInfo.vue'
import initialState from '@/store/state'
import cardFixture from './fixtures/card'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CardView', () => {
  let state

  const build = () => {
    const wrapper = shallowMount(CardView, {
      localVue,
      store: new Vuex.Store({ state })
    })

    return {
      wrapper,
      likeButton: () => wrapper.find(LikeButton),
      dislikeButton: () => wrapper.find(DislikeButton),
      skipButton: () => wrapper.find(SkipButton),
      cardInfo: () => wrapper.find(CardInfo)
    }
  }

  beforeEach(() => {
    state = { ...initialState }
  })
  
  it('renders the component', () => {
    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const { likeButton, skipButton, dislikeButton, cardInfo } = build()

    expect(likeButton().exists()).toBe(true)
    expect(skipButton().exists()).toBe(true)
    expect(dislikeButton().exists()).toBe(true)
    expect(cardInfo().exists()).toBe(true)
  })

  it('passes a binded of the infos of card', () => {
    state.card = cardFixture
    const { cardInfo } = build()
    
    expect(cardInfo().vm.card).toBe(state.card)
  })
})


