import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';

it('renders welcome message', () => {
  const { getByText } = render(<App />);
  expect(getByText('React Project')).toBeInTheDocument();
});