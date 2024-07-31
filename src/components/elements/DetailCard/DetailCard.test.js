import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailCard from './DetailCard.jsx';
import '@testing-library/jest-dom';

describe('DetailCard Component', () => {
    const props = {
        title: 'Test Anime',
        poster: 'https://example.com/poster.jpg',
        synopsis: 'This is a test synopsis for the anime.',
        slug: 'test-anime'
    };

    test('renders DetailCard component with correct props', () => {
        render(<DetailCard {...props} />);

        const titleElement = screen.getByText(/Test Anime/i);
        expect(titleElement).toBeInTheDocument();

        const imgElement = screen.getByRole('img', { name: 'Test Anime' });
        expect(imgElement).toHaveAttribute('src', props.poster);
        expect(imgElement).toHaveAttribute('alt', props.title);

        const synopsisElement = screen.getByText(/This is a test synopsis for the anime./i);
        expect(synopsisElement).toBeInTheDocument();

        const linkElement = screen.getByRole('link', { name: /Test Anime/i });
        expect(linkElement).toHaveAttribute('href', `/anime/${props.slug}`);
    });

    test('renders "No synopsis available" if synopsis is not provided', () => {
        const { rerender } = render(<DetailCard {...{ ...props, synopsis: null }} />);

        const defaultSynopsisElement = screen.getByText(/No synopsis available/i);
        expect(defaultSynopsisElement).toBeInTheDocument();
    });
});
