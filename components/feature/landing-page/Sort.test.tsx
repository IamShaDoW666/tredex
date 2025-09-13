import { render, screen, fireEvent } from '@testing-library/react';
import { Sort } from './Sort';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Sort', () => {
  it('renders a select with the correct placeholder', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    render(<Sort />);
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('updates the URL when the user selects a sort option', async () => {
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace });
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Sort />);
    const selectTrigger = screen.getByText('Sort by');
    fireEvent.click(selectTrigger);

    const option = await screen.findByText('Price: Low to High');
    fireEvent.click(option);

    expect(replace).toHaveBeenCalledWith('/?sort=price&order=asc');
  });
});
