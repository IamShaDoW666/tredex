"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileNavToggle } from '@/components/MobileNavToggle'; // Import MobileNavToggle
import LogoImage from '../../../images/logo.png';
const Header = () => {
  return (
    <header className="fixed top-10 ml-2 sm:left-16 z-50">
      <div className="flex items-center gap-4 bg-card rounded-full p-2 overflow-x-auto">
        <Avatar className="bg-primary">
          <AvatarImage src={LogoImage.src} alt="Tredex logo" />
          <AvatarFallback>TX</AvatarFallback>
        </Avatar>
        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-2"> {/* Added hidden md:flex */}
          <Link href="/" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground underline">
              Home
            </Button>
          </Link>
          <Link href="/collection" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Collection
            </Button>
          </Link>
          <Link href="/men" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Men
            </Button>
          </Link>
          <Link href="/women" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Women
            </Button>
          </Link>
        </nav>
        {/* Mobile navigation toggle - visible on mobile */}
        <div className="md:hidden"> {/* Added md:hidden */}
          <MobileNavToggle />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
