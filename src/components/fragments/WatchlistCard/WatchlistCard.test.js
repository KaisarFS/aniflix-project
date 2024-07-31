import React from 'react';
import { render, screen } from '@testing-library/react';
import WatchlistCard from './WatchlistCard'; 
import '@testing-library/jest-dom';

describe('WatchlistCard Component', () => {
    const props = {
        title: 'Test Anime',
        href: 'https://example.com/anime/test-anime',
        imgUrl: 'https://example.com/image.jpg',
        total_eps: 12,
        genres: [{ genre_name: 'Action' }, { genre_name: 'Adventure' }],
        status: 'Airing',
        type: 'TV',
        score: '8.5',
    };

    test('renders WatchlistCard component with correct props', () => {
        render(<WatchlistCard {...props} />);

        const titleElement = screen.getByText(/Test Anime/i);
        expect(titleElement).toBeInTheDocument();

        const statusElement = screen.getByText(/Status : Airing/i);
        expect(statusElement).toBeInTheDocument();

        const typeElement = screen.getByText(/Type : TV/i);
        expect(typeElement).toBeInTheDocument();

        const scoreElement = screen.getByText(/Score : 8.5/i);
        expect(scoreElement).toBeInTheDocument();

        const episodesElement = screen.getByText(/Episode : 12 Eps/i);
        expect(episodesElement).toBeInTheDocument();

        props.genres.forEach(genre => {
            const genreElement = screen.getByText(genre.genre_name);
            expect(genreElement).toBeInTheDocument();
        });
    });

    test('renders the image with correct attributes', () => {
        render(<WatchlistCard {...props} />);
        
        const imgElement = screen.getByAltText(/Test Anime/i);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', props.imgUrl);
        expect(imgElement).toHaveAttribute('width', '202');
        expect(imgElement).toHaveAttribute('height', '277');
    });
});
