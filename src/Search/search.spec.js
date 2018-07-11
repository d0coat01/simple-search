import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

it('renders search text input', () => {
  const wrapper = shallow(<Search />);
  const searchInput = <input className="search__input" />
  expect(wrapper.contains(searchInput)).toEqual(true);
});