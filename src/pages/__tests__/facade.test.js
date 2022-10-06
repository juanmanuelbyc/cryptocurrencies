import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Facade from '../../components/facade';

const TestFacade = () => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <Facade image="../assets/cryptoImage.png" topText="top text" mainText="main text" bottomText="bottom text" />
    </Router>
  );
};

it('renders correctly', () => {
  const tree = renderer.create(
    <TestFacade />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
