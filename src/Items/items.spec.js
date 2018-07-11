import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Items from './items';

Enzyme.configure({ adapter: new Adapter() });

it('items list if getting rendered', () => {
  const wrapper = shallow(<Items term=""/>);
  const items = <ul className="items"></ul>
  expect(wrapper.contains(items)).toEqual(true);
});