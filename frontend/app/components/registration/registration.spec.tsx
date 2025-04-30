import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Registration } from './registration';

describe('Registration Component', () => {
  test('renders Registration page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Registration />
      </MemoryRouter>
    );
    expect(getByText('embedda ett google formulär för anmälan här?')).toBeDefined();
  });
});