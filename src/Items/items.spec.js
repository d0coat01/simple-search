import React from 'react';
import { shallow } from 'enzyme';
import Items from './items';

it('items list if getting rendered', () => {
  const wrapper = shallow(<Items term=""/>);
  const items = <ul className="items"></ul>
  expect(wrapper.contains(items)).toEqual(true);
});