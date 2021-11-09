import { render, screen } from '@testing-library/react';
import Header from '../components/header/Header';

test('renders app header', () => {
    render(<Header />);
    const HeaderElement = screen.getByText(/Users list/);
    expect(HeaderElement).toBeInTheDocument();
  });