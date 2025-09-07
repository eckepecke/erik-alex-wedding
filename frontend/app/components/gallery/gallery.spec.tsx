import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Gallery } from './gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";

describe('Gallery Component', () => {
  test('renders Gallery', () => {
    const { container } = render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );
    expect(container).toBeDefined();
  });
});