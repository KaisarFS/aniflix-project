import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import '@testing-library/jest-dom';

describe('Hero Component', () => {
    test('renders hero text and image', () => {
        render(<Hero />);

        // const welcomeMessage = screen.getByText(/Selamat Datan di Aniflix/i);
        // expect(welcomeMessage).toBeInTheDocument();

        const descriptionText = screen.getByText(/Tonton anime favoritmu secara gratis dengan subtitle Indonesia di Aniflix!/i);
        expect(descriptionText).toBeInTheDocument();

        const heroImage = screen.getByAltText(/yuna kuma bear/i);
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'yuna-kuma.png');
    });
});
