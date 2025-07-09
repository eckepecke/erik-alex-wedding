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
    expect(getByText('viktorolofsson98@gmail.com')).toBeDefined();
    expect(getByText('+46704441671')).toBeDefined();
    expect(getByText('Emilla & Viktors Bröllop 2032 (33?)')).toBeDefined();
  });
});