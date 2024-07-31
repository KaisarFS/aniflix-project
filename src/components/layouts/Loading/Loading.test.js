import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading.jsx';
import '@testing-library/jest-dom';

describe('Loading Component', () => {
    test('renders loading animation and text', () => {
        render(<Loading />);

        const loadingImage = screen.getByAltText('');
        expect(loadingImage).toBeInTheDocument();
        expect(loadingImage).toHaveAttribute('src', 'https://media.tenor.com/FMR75MjeyWsAAAAi/deredere-anime.gif');
        
        const loadingText = screen.getByText(/Loading.../i);
        expect(loadingText).toBeInTheDocument();
    });
});
