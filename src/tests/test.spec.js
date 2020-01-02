import { shallowMount } from '@vue/test-utils'
import About from '../js/views/about'

describe('Check about.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(About, {
            propsData: { msg }
        });
        expect(wrapper.text()).toEqual(msg)
    });
});
