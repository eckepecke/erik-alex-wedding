import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Location } from './location';

describe('Location Component', () => {
  test('renders Location page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Location />
      </MemoryRouter>
    );
    expect(getByText('info om lokalen')).toBeDefined();
  });
});