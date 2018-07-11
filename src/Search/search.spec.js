import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Search from './search';

Enzyme.configure({ adapter: new Adapter() });

it('renders search text input', () => {
  const wrapper = shallow(<Search />);
  const searchInput = <input className="search__input" />
  expect(wrapper.contains(searchInput)).toEqual(true);
});