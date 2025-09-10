import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-card text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 mb-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">TREDEX</h3>
            <p className="text-muted-foreground text-sm">Trends start here.</p>
          </div>

          {/* Separator for larger screens */}
          <div className="hidden md:block">
            <Separator orientation="vertical" className="h-full" />
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Men</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Women</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kids</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors"> */}
              {/*   <Facebook size={24} /> */}
              {/* </Link> */}
              <Link target='_blank' href="https://www.instagram.com/tredexstorein?igsh=NHJjNXF5MDcxMmIz" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </Link>
              {/* <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"> */}
              {/*   <Twitter size={24} /> */}
              {/* </Link> */}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} TREDEX. All rights reserved.
        </div>
      </div>
    </footer >
  );
};

export default Footer;
