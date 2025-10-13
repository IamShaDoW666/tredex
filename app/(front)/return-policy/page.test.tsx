import React from 'react';
import { render, screen } from '@testing-library/react';
import ReturnPolicyPage from './page';

describe('ReturnPolicyPage', () => {
  it('should render the heading', () => {
    render(<ReturnPolicyPage />);
    const heading = screen.getByRole('heading', { name: /return policy/i });
    expect(heading).toBeInTheDocument();
  });
});
