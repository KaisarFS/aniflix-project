import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards.jsx'; 
import Card from '../../elements/Card/Card.jsx';
import '@testing-library/jest-dom';

describe('Cards Component', () => {
    test('renders children correctly', () => {
        render(
            <Cards>
                <Card imgUrl="https://example.com/image1.jpg" title="Anime 1" href="#" />
                <Card imgUrl="https://example.com/image2.jpg" title="Anime 2" href="#" />
                <Card imgUrl="https://example.com/image3.jpg" title="Anime 3" href="#" />
            </Cards>
        );

        const card1 = screen.getByText(/Anime 1/i);
        const card2 = screen.getByText(/Anime 2/i);
        const card3 = screen.getByText(/Anime 3/i);

        expect(card1).toBeInTheDocument();
        expect(card2).toBeInTheDocument();
        expect(card3).toBeInTheDocument();
    });
});
