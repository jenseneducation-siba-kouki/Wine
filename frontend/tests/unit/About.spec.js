import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";


describe('About', () => {
   test('find there is an image src', () => {
        const wrapper = shallowMount(About)
        const elements = wrapper.find('img')
        expect(elements.contains('img')).toBe(true)
    })
  })