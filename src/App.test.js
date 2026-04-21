import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello brio', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello brio/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders hello brio', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello brio/i);
  expect(linkElement).toBeInTheDocument();
});
