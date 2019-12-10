import { shallowMount } from '@vue/test-utils'
import CardView from '@/views/CardView'

describe('CardView', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(CardView)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
