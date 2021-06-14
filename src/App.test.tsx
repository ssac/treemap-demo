import React from 'react';
import { render, screen, getByTestId } from '@testing-library/react';
import App from './App';


test('renders data table', () => {
  render(<App />);
  const thElement = screen.getByText(/Name/i);
  expect(thElement).toBeInTheDocument();
});

test('renders add button', () => {
  render(<App />);
  const btnElement = screen.getByText(/Add/i);
  expect(btnElement).toBeInTheDocument();
});

test('renders tree map', () => {
  render(<App />);
  expect(getByTestId(document.documentElement, 'tree-map')).toBeInTheDocument();
});