import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Welcome from '../../08.test_jest_enzyme/src/Welcome';

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('Welcome renders helllo world with Enzyme', () => {
    const welcome = shallow(<Welcome />);
    expect(welcome.find('div').text()).toEqual('Hello World!');
  });
});
