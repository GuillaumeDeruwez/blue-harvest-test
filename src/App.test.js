import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

// mock context for chart
jest.mock('react-chartjs-2', () => ({
  Bar: () => null, // add any additional chart types here
}));

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/Sir Vote-a-lot/i)).toBeInTheDocument();
});
