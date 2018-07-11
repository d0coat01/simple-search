import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Search from './search';

Enzyme.configure({ adapter: new Adapter() });

it('Renders Search.', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.find('.search__input').length).toEqual(1);
});