import { render } from "@testing-library/react";
import { Footer } from "./footer";
import { MemoryRouter } from "react-router";


describe('Footer Component', () => {
  test('renders footer', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(getByText('Emilla & Viktors Bröllop 2032 (33?)')).toBeDefined();
  });

  test('renders contact email as a clickable mailto link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const emailLink = getByText('viktorolofsson98@gmail.com').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:viktorolofsson98@gmail.com');
  });

  test('renders contact phone as a clickable tel link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const phoneLink = getByText('+46704441671').closest('a');
    expect(phoneLink).toHaveAttribute('href', 'tel:+46704441671');
  });
});