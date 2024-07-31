import React from 'react'; 
import { render, screen } from '@testing-library/react';
import AsideCard from '../elements/AsideCard/AsideCard.jsx';
import '@testing-library/jest-dom';

describe('AsideCard Component', () => {
    const defaultProps = {
        imgUrl: 'https://example.com/image.jpg',
        title: 'Test Title',
        href: '/test-link',
        uploaded: 'Jul 31, 10:30',
        topics: ['Action', 'Adventure'],
    };

    test('renders the aside card with the provided props', () => {
        render(<AsideCard {...defaultProps} />);

        const image = screen.getByAltText('Test Title');
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');

        const title = screen.getByText('Test Title');
        expect(title).toBeInTheDocument();
        expect(title.closest('a')).toHaveAttribute('href', '/test-link');

        const uploadedText = screen.getByText(/Uploaded : Jul 31, 10:30/i);
        expect(uploadedText).toBeInTheDocument();
    });
});
