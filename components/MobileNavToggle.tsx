"use client";

import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Instagram, Menu } from "lucide-react";
import Link from 'next/link';
import gsap from 'gsap';
import { useState, useRef, useEffect } from "react";

export function MobileNavToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && navRef.current) {
      gsap.fromTo(navRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out", delay: 0.2 } // Added delay
      );
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <SheetClose >
          <span className="sr-only">Close</span>
        </SheetClose>
        <nav ref={navRef} className="flex flex-col justify-center gap-8 pt-10"> {/* Increased padding-top */}
          <Link href="/" passHref>
            <Button variant="ghost" className="text-3xl py-6 font-semibold w-full justify-start">
              Home
            </Button>
          </Link>
          <Link href="/collection" passHref>
            <Button variant="ghost" className="text-3xl py-6 font-semibold w-full justify-start">
              Collection
            </Button>
          </Link>
          <Link href="/men" passHref>
            <Button variant="ghost" className="text-3xl py-6 font-semibold w-full justify-start">
              Men
            </Button>
          </Link>
          <Link href="/women" passHref>
            <Button variant="ghost" className="text-3xl py-6 font-semibold w-full justify-start">
              Women
            </Button>
          </Link>
        </nav>
        <SheetFooter>
          <Link passHref target='_blank' href="https://www.instagram.com/tredexstorein?igsh=NHJjNXF5MDcxMmIz" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
            <Button variant={'ghost'} className="text-foreground hover:bg-accent hover:text-foreground">
              <Instagram size={24} />
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet >
  );
}
