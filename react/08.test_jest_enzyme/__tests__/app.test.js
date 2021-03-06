import React from 'react';
import { before, shallow } from 'enzyme';
import App from '../../08.test_jest_enzyme/src/App';

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('App renders nested components', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });

  it('onAdd updates List', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEquals('Name 1');
  });
});
