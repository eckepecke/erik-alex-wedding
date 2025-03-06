import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutUs } from './about';

test('renders About page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <AboutUs />
    </MemoryRouter>
  );
  expect(getByText('About us')).toBeDefined();
});