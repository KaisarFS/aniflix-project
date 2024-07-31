import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.jsx'; // Adjust the import path as needed

describe('Card Component', () => {
    const defaultProps = {
        imgUrl: 'https://example.com/image.jpg',
        title: 'Test Title',
        href: '/test-link',
        episode: 'Episode 1',
        rating: '8.5',
        genres: ['Action', 'Adventure']
    };

    test('renders the card with the provided props', () => {
        render(<Card {...defaultProps} />);

        // Check if the image is rendered by src
        expect(screen.getByRole('img')).toHaveAttribute('src', defaultProps.imgUrl);
        
        // Check if the title is rendered
        expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
        
        // Check if the episode is rendered
        expect(screen.getByText(defaultProps.episode)).toBeInTheDocument();

        // Check if the rating is rendered
        expect(screen.getByText(defaultProps.rating)).toBeInTheDocument();

        // Check if the genres are rendered
        expect(screen.getByText(/Action, Adventure/i)).toBeInTheDocument();
        
        // Check if the link is rendered correctly
        expect(screen.getByRole('link')).toHaveAttribute('href', defaultProps.href);
    });

    test('does not render episode if not provided', () => {
        render(<Card {...defaultProps} episode={null} />);
        expect(screen.queryByText(defaultProps.episode)).not.toBeInTheDocument();
    });

    test('does not render rating if not provided', () => {
        render(<Card {...defaultProps} rating={null} />);
        expect(screen.queryByText(defaultProps.rating)).not.toBeInTheDocument();
    });

    test('renders only two genres if more are provided', () => {
        const moreGenres = ['Action', 'Adventure', 'Fantasy', 'Drama'];
        render(<Card {...defaultProps} genres={moreGenres} />);
        expect(screen.getByText(/Action, Adventure/i)).toBeInTheDocument();
    });
});
