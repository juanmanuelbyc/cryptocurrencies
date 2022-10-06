import React from 'react';
import renderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import DetailRow from '../../components/detailRow';

const TestDetail = () => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <DetailRow title="Price" value="99999" />
    </Router>
  );
};

it('renders correctly', () => {
  const tree = renderer.create(
    <TestDetail />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
