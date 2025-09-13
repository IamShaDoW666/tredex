import { render, screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.useFakeTimers();

describe('Search', () => {
  it('renders an input with the correct placeholder', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    render(<Search />);
    expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
  });

  it('updates the URL when the user types in the search box', () => {
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace });
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Search />);
    const input = screen.getByPlaceholderText('Search products...');
    fireEvent.change(input, { target: { value: 'sneaker' } });

    // Fast-forward timers
    jest.advanceTimersByTime(300);

    expect(replace).toHaveBeenCalledWith('/?search=sneaker');
  });
});
