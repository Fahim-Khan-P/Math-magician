import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

test('calcul is available', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
