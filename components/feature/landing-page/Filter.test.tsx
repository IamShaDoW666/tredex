import { render, screen, fireEvent } from '@testing-library/react';
import { Filter } from './Filter';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe('Filter', () => {
  it('renders filter categories', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    render(<Filter />);
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Size')).toBeInTheDocument();
    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Brand')).toBeInTheDocument();
  });

  it('updates the URL when a filter is selected', () => {
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace });
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Filter />);
    const sneakerCheckbox = screen.getByLabelText('Sneaker');
    fireEvent.click(sneakerCheckbox);

    expect(replace).toHaveBeenCalledWith('/?category=Sneaker');
  });

  it('updates the URL when a filter is deselected', () => {
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ replace });
    const searchParams = new URLSearchParams();
    searchParams.set('category', 'Sneaker');
    (useSearchParams as jest.Mock).mockReturnValue(searchParams);
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Filter />);
    const sneakerCheckbox = screen.getByLabelText('Sneaker');
    fireEvent.click(sneakerCheckbox);

    expect(replace).toHaveBeenCalledWith('/?');
  });
});
