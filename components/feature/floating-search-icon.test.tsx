"use client";

import { render, screen } from "@testing-library/react";
import { FloatingSearchIcon } from "./floating-search-icon";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

describe("FloatingSearchIcon", () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
    (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it("renders the search icon button", () => {
    render(<FloatingSearchIcon />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
