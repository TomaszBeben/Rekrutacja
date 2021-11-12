import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

beforeEach(() => {
  render(<Header />)
})

describe('Header component is working correctly', () => {
  test('that should render a header', () => {
    // render(<Header />)
    const HeaderElement = screen.getByRole('heading');
    expect(HeaderElement).toBeInTheDocument();
  })

  test('renders correct text', () => {
    // render(<Header />);
    const HeaderElement = screen.getByText(/Users list/);
    expect(HeaderElement).toBeInTheDocument();
  });
})
