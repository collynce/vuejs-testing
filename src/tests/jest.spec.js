import {mount} from '@vue/test-utils'
import data from '../js/views/data'


describe('Check data.vue', () => {

    //Mounting data component
    const Wrapper = mount(data);

    //Accessing the Vue Instance
    const instance = Wrapper.vm;

    it('returns data array', () => {
        expect(typeof data.data().dataArray).toBe('object')
    });

    it('check for form element', () => {
        expect(Wrapper.contains('form')).toBe(true)
    });

    it('button click should push to array', () => {
        const inputData = instance.$data.name = 'Collins';
        expect(Wrapper.vm.name).toBe(inputData);
        const form = Wrapper.find('form');
        form.trigger('submit');
        expect(Wrapper.vm.dataArray.name).toBe(inputData);
    })

});



