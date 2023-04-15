import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check main page rendering', () => {
  render(<App />);
  const textElement = screen.getByText('Rethink your living & renting');
  expect(textElement).toBeInTheDocument();
});

test('Check explore page rendering', () => {
  render(<App />);
  const textElement = screen.getByText('From one-guest rooms to penthouses with pools and gardens');
  expect(textElement).toBeInTheDocument();
});

test('Check about page rendering', () => {
  render(<App />);
  const textElement = screen.getByText('Allow us to tell you a story...');
  expect(textElement).toBeInTheDocument();
});
