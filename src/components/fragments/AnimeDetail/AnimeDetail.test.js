import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimeDetail from './AnimeDetail';
import '@testing-library/jest-dom';

describe('AnimeDetail Component', () => {
    test('renders children correctly', () => {
        render(
            <AnimeDetail>
                <div>Test Child</div>
            </AnimeDetail>
        );

        const childElement = screen.getByText(/Test Child/i);
        expect(childElement).toBeInTheDocument();
    });
});
