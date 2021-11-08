import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { ContextComponent } from '../context/Context';
import App from '../App';
import Header from '../components/header/Header';
import SearchBar from '../components/searchBar/SearchBar';

test('renders app header', () => {
  render(<Header />);
  const HeaderElement = screen.getByText(/Users list/);
  expect(HeaderElement).toBeInTheDocument();
});

test('if search bar returns correct value', async () => {
  const { getByTestId, getByText } = render(<ContextComponent><App><SearchBar /></App></ContextComponent>);
  const input = getByTestId('search-bar');

  fireEvent.change(input, { target: { value: 'lea' } });
  const validText = await waitFor(() =>
    getByText(/Leanne Graham/)
  );

  expect(validText).toBeInTheDocument();
})

test('if loading is visible', async () => {
  const { getByTestId, getByText, debug } = render(<ContextComponent><App><SearchBar /></App></ContextComponent>)
  const input = getByTestId('search-bar')

  fireEvent.change(input, { target: { value: '' } })
  console.log(debug());
  const validText = getByText(/Loading.../)

  expect(validText).toBeInTheDocument()
})