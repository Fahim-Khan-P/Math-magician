import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../Components/Quote';

test('should render quotes', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
