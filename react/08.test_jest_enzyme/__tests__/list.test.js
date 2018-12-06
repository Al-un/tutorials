import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import List from '../../08.test_jest_enzyme/src/List';

describe('List', () => {
  let list;

  beforeEach(() => {
    list = shallow(<List data={['Name 1', 'Name 2', 'Name 3']} />);
  });

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });

  it('Class of rendered tables', () => {
    expect(list.find('.myClass').length).toEqual(1);
  });

  it('List renders headers column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(2);
    expect(arr.first().text()).toEqual('Name');
  });

  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(6);
    expect(arr.at(2).find('td').text()).toEqual('Name 2');
  });
});
