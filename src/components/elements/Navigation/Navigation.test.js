// Navigation.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { addToHistory } from '../../../utils';

jest.mock('../../../utils', () => ({
    addToHistory: jest.fn()
}));

describe('Navigation Component', () => {
    const props = {
        prevSlug: 'previous-episode',
        nextSlug: 'next-episode',
        slug: 'current-anime'
    };

    test('renders navigation links correctly', () => {
        render(
            <MemoryRouter>
                <Navigation {...props} />
            </MemoryRouter>
        );
    });
});
