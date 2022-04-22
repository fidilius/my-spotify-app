import { render, screen } from '@testing-library/react';
import App from '../App';

import Search from '../components/Search';
import { Provider } from 'react-redux';
import store from '../store';


test('renders Track components', () => {
  render(<App />);
  const Track = screen.getAllByTestId('track');
  expect(Track.length).toBe(10);
});

test('renders login button', () => {
  render(<App />);
  const btnLogin = screen.getByTestId('btnLogin');
  expect(btnLogin).toBeInTheDocument();
})

test('renders search component', () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  )

  const formSearch = screen.getByTestId('formSearch');
  const playlist = screen.getByTestId('playlist');
  expect(formSearch).toBeInTheDocument();
  expect(playlist).toBeInTheDocument();
})

