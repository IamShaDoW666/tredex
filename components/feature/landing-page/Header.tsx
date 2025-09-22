"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileNavToggle } from '@/components/MobileNavToggle'; // Import MobileNavToggle
import LogoImage from '../../../images/logo.png';
import { Instagram } from 'lucide-react';
const Header = () => {
  return (
    <header className="fixed top-10 ml-2 md:left-16 z-50 flex justify-between w-full md:w-auto items-center px-8">
      <div className="flex items-center gap-4 bg-card border-2 dark:border-0 border-accent-foreground rounded-full p-2 overflow-x-auto">
        <Avatar className="bg-primary">
          <AvatarImage src={LogoImage.src} alt="Tredex logo" />
          <AvatarFallback>TX</AvatarFallback>
        </Avatar>
        {/* Desktop navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-2"> {/* Added hidden md:flex */}
          <Link href="/" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Home
            </Button>
          </Link>
          <Link href="/collection" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Collection
            </Button>
          </Link>
          <Link href="/collection?sex=Men" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Men
            </Button>
          </Link>
          <Link href="/collection?sex=Women" passHref>
            <Button variant="ghost" className="text-foreground hover:bg-accent hover:text-foreground">
              Women
            </Button>
          </Link>
        </nav>
        <ThemeToggle />
        <Link passHref target='_blank' href="https://www.instagram.com/tredexstorein?igsh=NHJjNXF5MDcxMmIz" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
          <Button variant={'ghost'} className="text-foreground hover:bg-accent hover:text-foreground">
            <Instagram size={24} />
          </Button>
        </Link>
      </div>
      {/* Mobile navigation toggle - visible on mobile */}
      <div className="md:hidden flex items-center gap-4 bg-card border-2 dark:border-0 border-accent-foreground rounded-full p-2 overflow-x-auto"> {/* Added md:hidden */}
        <MobileNavToggle />
      </div>
    </header>
  );
};

export default Header;
