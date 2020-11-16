import { render, screen } from '@testing-library/react';
import App from './App';


// TODO get this syntax, what is happening here (2020-11-16)
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
