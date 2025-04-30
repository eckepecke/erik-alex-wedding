import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { CustomNavBar } from './navbar';

describe('CustomNavBar', () => {
    test('given no links, renders without error', () => {
        const { container } = render(
            <MemoryRouter>
                {CustomNavBar([])}
            </MemoryRouter>
        );
        expect(container).toBeDefined();
    });

    test('given links, renders without error', () => {
        const links = [{ title: 'ha lou', url: 'url' }, { title: 'title', url: 'url' }];

        render(
            <MemoryRouter>
                {CustomNavBar(links)}
            </MemoryRouter>
        );

        expect(screen.getByText('ha lou')).toBeInTheDocument();
        expect(screen.getByText('title')).toBeInTheDocument();
        expect(screen.getAllByRole('link')).toHaveLength(2);
    });
});