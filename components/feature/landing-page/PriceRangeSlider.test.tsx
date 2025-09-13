import { render, screen } from '@testing-library/react';
import { PriceRangeSlider } from './PriceRangeSlider';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('PriceRangeSlider', () => {
  it('renders a slider', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    render(<PriceRangeSlider />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });
});
