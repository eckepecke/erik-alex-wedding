import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Contact } from './contact';

describe('Contact Component', () => {
  test('renders Contact page', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
    expect(getByText('kontaktuppgifter')).toBeDefined();
  });
});