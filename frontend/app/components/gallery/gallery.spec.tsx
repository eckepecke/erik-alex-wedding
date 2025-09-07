import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Gallery } from './gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";

describe('Gallery Component', () => {
  test('renders Gallery', () => {
    const { container } = render(
      <MemoryRouter>
        <Gallery images={['some image paths']}/>
      </MemoryRouter>
    );
    expect(container).toBeDefined();
  });

  test('renders images with correct src attributes', () => {
    const expectedImages = [
      "/aboutus/adventure.JPG", "/aboutus/deer.JPG", "/aboutus/japan.JPG", "/aboutus/moln.jpg", "/aboutus/present.jpg", "/aboutus/ragnar.jpg", "/aboutus/seek.jpg", "/aboutus/skiing.jpg", "/aboutus/snobbar.jpg", "/aboutus/split.jpg",
    ];

    const { container } = render(
      <MemoryRouter>
        <Gallery images={expectedImages}/>
      </MemoryRouter>
    );
    const imgElements = container.querySelectorAll('img');
    const renderedSrcs = Array.from(imgElements).map(img => img.getAttribute('src'));

    expectedImages.forEach(src => {
      expect(renderedSrcs).toContain(src);
    });
  });
});