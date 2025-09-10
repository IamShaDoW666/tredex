import { render, screen, fireEvent } from '@testing-library/react';
import { MobileNavToggle } from './MobileNavToggle';

describe('MobileNavToggle', () => {
  it('renders without crashing', () => {
    render(<MobileNavToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('toggles the navigation menu open when the button is clicked', () => {
    render(<MobileNavToggle />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument(); // Assuming Sheet uses role 'dialog'
  });

  it('closes the navigation menu when the button is clicked again', () => {
    render(<MobileNavToggle />);
    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton); // Open the menu
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(toggleButton); // Close the menu
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});