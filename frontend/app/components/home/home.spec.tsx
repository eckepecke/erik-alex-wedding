import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './home';

describe('Home Component', () => {
  test('renders home page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(getByText('Välkommen 😏')).toBeDefined();
  });
});