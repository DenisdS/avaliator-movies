import { shallowMount } from '@vue/test-utils'
import LikeButton from '@/components/LikeButton'

describe('LikeButton', () => {
  const build = () => {
    const wrapper = shallowMount(LikeButton)

    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button'),
    }
  }

  it('renders the component', () => {

    const { wrapper } = build()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders main child components', () => {

    const { button } = build()

    expect(button().exists()).toBe(true)
  })

  it('calls "liked" event when user click "like button"', () => {
    
    const expectedCard = 'The Matrix'
    const { wrapper, input, button } = build()
    input().element.value = expectedCard

   input().trigger('input')
   button().trigger('click')

   expect(wrapper.emitted().liked[0]).toEqual([expectedCard])
  })
})