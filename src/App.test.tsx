import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './routers/HelloWorld';

test('renders learn react link', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
