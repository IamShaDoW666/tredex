"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';
const Header = () => {
  return (
    <header className="fixed top-10 ml-2 sm:left-16 z-50">
      <div className="flex items-center gap-4 bg-black rounded-full p-2 overflow-x-auto">
        <Avatar className="bg-lime-400">
          <AvatarImage src={'../../../images/logo.png'} alt="Tredex logo" />
          <AvatarFallback>TX</AvatarFallback>
        </Avatar>
        <nav className="flex items-center gap-2">
          <Link href="/" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white underline">
              Home
            </Button>
          </Link>
          <Link href="/collection" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
              Collection
            </Button>
          </Link>
          <Link href="/men" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
              Men
            </Button>
          </Link>
          <Link href="/women" passHref>
            <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
              Women
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
