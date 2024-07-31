import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar Component', () => {
  test('renders Navbar with expected elements', () => {
    render(<Navbar />);
  });
});
