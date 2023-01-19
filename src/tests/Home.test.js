import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Components/Home';

test('renders home page correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
