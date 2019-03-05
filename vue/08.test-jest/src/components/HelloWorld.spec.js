import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
