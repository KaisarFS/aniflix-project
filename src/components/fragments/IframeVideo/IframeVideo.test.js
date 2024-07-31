// IframeVideo.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import IframeVideo from './IframeVideo.jsx';
import '@testing-library/jest-dom';

describe('IframeVideo Component', () => {
    test('renders iframe with modified URL for HD quality', () => {
        const streamUrl = 'https://example.com/desudesu/?id=123';
        const quality = 'hd';

        render(<IframeVideo streamUrl={streamUrl} quality={quality} />);
        
        const iframeElement = screen.getByTitle('video');
        expect(iframeElement).toBeInTheDocument();
        expect(iframeElement).toHaveAttribute('src', 'https://example.com/desudesuhd/?id=123');
    });

    test('renders iframe with original URL for non-HD quality', () => {
        const streamUrl = 'https://example.com/stream/?id=456';
        const quality = 'sd';

        render(<IframeVideo streamUrl={streamUrl} quality={quality} />);
        
        const iframeElement = screen.getByTitle('video');
        expect(iframeElement).toBeInTheDocument();
        expect(iframeElement).toHaveAttribute('src', 'https://example.com/stream/?id=456');
    });

    test('renders iframe with modified URL for other stream formats', () => {
        const streamUrl = 'https://example.com/beta/stream/?id=789';
        const quality = 'hd';

        render(<IframeVideo streamUrl={streamUrl} quality={quality} />);
        
        const iframeElement = screen.getByTitle('video');
        expect(iframeElement).toBeInTheDocument();
        expect(iframeElement).toHaveAttribute('src', 'https://example.com/beta/stream/hd/?id=789');
    });
});
