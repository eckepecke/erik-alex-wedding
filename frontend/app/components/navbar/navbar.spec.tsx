import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CustomNavBar } from './navbar';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('CustomNavBar', () => {
    test('given no links, renders without error', () => {
        const { container } = render(
            <MemoryRouter>
                <CustomNavBar navLinks={[]} />
            </MemoryRouter>
        );
        expect(container).toBeDefined();
    });

    test('given links, renders without error', () => {
        const links = [{ title: 'ha lou', url: 'url' }, { title: 'title', url: 'url' }];

        render(
            <MemoryRouter>
                <CustomNavBar navLinks={links} />
            </MemoryRouter>
        );

        expect(screen.getByText('ha lou')).toBeInTheDocument();
        expect(screen.getByText('title')).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });

    test('given scrolled, navbar has opacity', () => {
        const { container } = render(
            <MemoryRouter>
                <CustomNavBar navLinks={[]} />
            </MemoryRouter>
        );

        act(() => {
            window.scrollY = 100;
            window.dispatchEvent(new Event('scroll'));
        });

        expect(container.querySelector('.bg-body-tertiary')).toHaveClass('opacity-50');
    });

    test('given not scrolled, navbar has no opacity', () => {
        const { container } = render(
            <MemoryRouter>
                <CustomNavBar navLinks={[]} />
            </MemoryRouter>
        );

        act(() => {
            window.scrollY = 0;
            window.dispatchEvent(new Event('scroll'));
        });

        expect(container.querySelector('.bg-body-tertiary')).not.toHaveClass('opacity-50');
    });

    // TODO should probably test for screen sizes and burger menu
});