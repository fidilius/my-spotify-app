import { server } from './mocks/server';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';

import Search from '../components/Search';
import { Provider } from 'react-redux';
import store from '../store';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Search API Function', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<Provider store={store}><Search /></Provider>);
    const inputSearch = getByPlaceholderText(/Artists, songs or albums/i);
    userEvent.type(inputSearch, 'test');
  
    waitFor(() => {
      expect(getByTestId('resultSearch')).toBeInTheDocument();
      expect(getByText('test')).toBeInTheDocument();
    })
      
})