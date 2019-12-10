import { shallowMount } from '@vue/test-utils'
import CardView from '@/views/CardView'
import LikeButton from '@/components/LikeButton.vue'
import DislikeButton from '@/components/DislikeButton.vue'
import SkipButton from '@/components/SkipButton.vue'

describe('CardView', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(CardView)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {
    const wrapper = shallowMount(CardView)
    const likeButton = wrapper.find(LikeButton)
    const dislikeButton = wrapper.find(DislikeButton)
    const skipButton = wrapper.find(SkipButton)


    expect(likeButton.exists()).toBe(true)
    expect(dislikeButton.exists()).toBe(true)
    expect(skipButton.exists()).toBe(true)
  })
})


