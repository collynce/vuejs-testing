import {mount, shallowMount} from '@vue/test-utils'
import About from '../js/views/about'
import Vue from 'vue'

describe('Check about.vue', () => {

    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(About, {
            propsData: {msg}
        });
        expect(wrapper.text()).toEqual(msg)
    });

    it('renders props.msg when passed', () => {
        const Wrapper = mount(About);
        // const vm = Wrapper.vm;
        // console.log(vm.getPost)
        // const li = Wrapper.find('li');

        // vm.$mount();
        const Constructor = Vue.extend(About);
        const vm = new Constructor().$mount();
        expect(vm.items).toBe('sds');

    });

});
