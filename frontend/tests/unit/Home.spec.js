import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';


describe('Home', () => {
  test('find the tag with "OUR WINES"', () => {
    const wrapper = shallowMount(Home)
    const msg = 'OUR WINES'

    const element = wrapper.find('h3').text()

    expect(element).toBe(msg)
  })
})
