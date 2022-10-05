import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../../redux/configStore';
import DetailsPage from '../detailsPage';
import '@testing-library/jest-dom/extend-expect';

const TestDetailsPage = () => {
  const history = createMemoryHistory();
  return (
    <Provider store={store}>
      <Router location={history.location} navigator={history}>
        <DetailsPage />
      </Router>
    </Provider>
  );
};

render(<TestDetailsPage />);

describe('Details page', () => {
  it('gets elements', () => {
    expect(screen.getByText('current_price')).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <TestDetailsPage />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
