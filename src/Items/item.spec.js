import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Item from './item';

Enzyme.configure({ adapter: new Adapter() });

it('Renders Item.', () => {
  const wrapper = shallow(<Item key="1" name="Hello!" />);
  const item = <li key="1">Hello!</li>
  expect(wrapper.contains(item)).toEqual(true);
});