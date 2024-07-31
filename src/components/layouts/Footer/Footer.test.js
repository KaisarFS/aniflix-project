import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
    test('renders company name and year', () => {
        render(<Footer />);

        const links = screen.getAllByRole('link');

        const companyName = links.find(link => link.textContent === 'Aniflix');
        
        const currentYear = new Date().getFullYear();
        const copyrightText = screen.getByText(`© ${currentYear} Aniflix | @kaisarfs`);

        expect(companyName).toBeInTheDocument();
        expect(copyrightText).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(<Footer />);

        const homeLink = screen.getByRole('link', { name: /home/i });
        const completedLink = screen.getByRole('link', { name: /completed/i });
        const ongoingLink = screen.getByRole('link', { name: /ongoing/i });

        expect(homeLink).toBeInTheDocument();
        expect(completedLink).toBeInTheDocument();
        expect(ongoingLink).toBeInTheDocument();
    });
});
