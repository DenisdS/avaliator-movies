import { shallowMount } from '@vue/test-utils'
import CardView from '@/views/CardView'
import LikeButton from '@/components/LikeButton.vue'
import DislikeButton from '@/components/DislikeButton.vue'
import SkipButton from '@/components/SkipButton.vue'
import CardInfo from '@/components/CardInfo.vue'

describe('CardView', () => {
  const build = () => {
    const wrapper = shallowMount(CardView, {
      data: () => ({
        card: {}
      })
    })

    return {
      wrapper,
      likeButton: () => wrapper.find(LikeButton),
      dislikeButton: () => wrapper.find(DislikeButton),
      skipButton: () => wrapper.find(SkipButton),
      cardInfo: () => wrapper.find(CardInfo)
    }
  }
  
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
    const { wrapper, cardInfo } = build()
    wrapper.setData({
      card: {
        movie: 'Matrix'
      }
    })

    expect(cardInfo().vm.card).toBe(wrapper.vm.card)
  })
})


