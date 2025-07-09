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
    expect(getByText('Anmälan till Emilla & Viktors Bröllop')).toBeDefined();
  });
});