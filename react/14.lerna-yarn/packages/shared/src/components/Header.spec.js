import * as React from 'react';
import { mount } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('Headers renders title', () => {
    const title = 'That Title!';
    const wrapper = mount(<Header>{title}</Header>);
    expect(wrapper.find(Header).text()).toEqual(title);
  });
});
