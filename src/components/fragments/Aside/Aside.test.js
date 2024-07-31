import React from 'react';
import { render, screen } from '@testing-library/react';
import Aside from './Aside';
import '@testing-library/jest-dom';

describe('Aside Component', () => {
    test('renders children correctly', () => {
        render(
            <Aside>
                <div>Test Child</div>
            </Aside>
        );

        const childElement = screen.getByText(/Test Child/i);
        expect(childElement).toBeInTheDocument();
    });
});