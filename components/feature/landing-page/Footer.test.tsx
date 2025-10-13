import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should have a link to the Return Policy page', () => {
    render(<Footer />);
    const link = screen.getByRole('link', { name: /return policy/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/return-policy');
  });
});
