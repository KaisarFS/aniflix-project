import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookmarkButton from './BookmarkButton';
import '@testing-library/jest-dom';

beforeEach(() => {
    localStorage.clear();
});

describe('BookmarkButton Component', () => {
    const slug = 'anime-1';

    test('renders "Add To Watchlist" when not bookmarked', () => {
        render(<BookmarkButton slug={slug} />);
        
        const buttonElement = screen.getByText(/Add To Watchlist/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('updates to "Remove From Watchlist" when clicked', () => {
        render(<BookmarkButton slug={slug} />);

        const buttonElement = screen.getByText(/Add To Watchlist/i);
        fireEvent.click(buttonElement);

        const updatedButtonElement = screen.getByText(/Remove From Watchlist/i);
        expect(updatedButtonElement).toBeInTheDocument();
    });

    test('toggles bookmark state in localStorage', () => {
        render(<BookmarkButton slug={slug} />);

        expect(JSON.parse(localStorage.getItem('bookmarks'))).toEqual(null);

        const buttonElement = screen.getByText(/Add To Watchlist/i);
        fireEvent.click(buttonElement);

        expect(JSON.parse(localStorage.getItem('bookmarks'))).toEqual([slug]);

        const updatedButtonElement = screen.getByText(/Remove From Watchlist/i);
        fireEvent.click(updatedButtonElement);

        expect(JSON.parse(localStorage.getItem('bookmarks'))).toEqual([]);
    });
});
