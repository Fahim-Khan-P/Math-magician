import React from 'react';
import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';

test('calcul is available', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(screen.findByTitle('Lets do some math!')).toMatchSnapshot();
});
