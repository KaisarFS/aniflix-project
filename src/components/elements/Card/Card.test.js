import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.jsx';
import '@testing-library/jest-dom';

describe('Card Component', () => {
    const props = {
        imgUrl: 'https://example.com/image.jpg',
        title: 'Test Title',
        href: 'https://example.com',
        episode: 'Episode 1',
        rating: '9.0',
        genres: ['Action', 'Adventure']
    };

    test('renders Card component with correct props', () => {
        render(<Card {...props} />);

        const titleElement = screen.getByText(/Test Title/i);
        expect(titleElement).toBeInTheDocument();

        const imgElement = screen.getByRole('img', { name: `Poster of ${props.title}` });
        expect(imgElement).toHaveAttribute('src', props.imgUrl);

        const episodeElement = screen.getByText(/Episode 1/i);
        expect(episodeElement).toBeInTheDocument();

        const ratingElement = screen.getByText(/9.0/i);
        expect(ratingElement).toBeInTheDocument();

        const genresElement = screen.getByText(/Action, Adventure/i);
        expect(genresElement).toBeInTheDocument();
    });
    test('does not render episode if not provided', () => {
        const { rerender } = render(<Card {...{ ...props, episode: null }} />);
        
        const episodeElement = screen.queryByText(/Episode 1/i);
        expect(episodeElement).not.toBeInTheDocument();
    });

    test('does not render rating if not provided', () => {
        const { rerender } = render(<Card {...{ ...props, rating: null }} />);
        
        const ratingElement = screen.queryByText(/9.0/i);
        expect(ratingElement).not.toBeInTheDocument();
    });

    test('does not render genres if not provided', () => {
        const { rerender } = render(<Card {...{ ...props, genres: null }} />);
        
        const genresElement = screen.queryByText(/Action, Adventure/i);
        expect(genresElement).not.toBeInTheDocument();
    });
});
