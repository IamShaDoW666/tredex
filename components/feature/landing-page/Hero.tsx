"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Spotlight } from '@/components/ui/spotlight';
import Link from 'next/link';
import { Boxes, ShieldCheck, Truck } from 'lucide-react';
import { useProductsPlain } from '@/hooks/use-products';
export const dummyProducts = [
  {
    title: "Nike Air Force 1 '07",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "Adidas Samba OG",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Converse Chuck 70",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "New Balance 550",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Nike Dunk Low Retro",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "Air Jordan 1 High OG",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Vans Knu Skool",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "Puma Suede Classic",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Reebok Club C 85",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "ASICS GEL-Kayano 14",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Hoka Clifton 9",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "On Cloud 5",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Salomon XT-6",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
  {
    title: "Adidas Campus 00s",
    link: "http://localhost:3000",
    thumbnail:
      "https://nb.scene7.com/is/image/NB/bb550vga_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440",
  },
  {
    title: "Nike Blazer Mid '77",
    link: "http://localhost:3000",
    thumbnail:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
  },
];

const Hero = () => {
  const { data: products, isLoading } = useProductsPlain()
  return (
    <>
      {!isLoading && <HeroParallax products={products} />}
      {/* {JSON.stringify(products)} */}
      <div className="py-32 flex flex-col justify-center items-center relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="bg-background bg-opacity-50 px-4 flex flex-col justify-center items-center text-foreground text-center">
          <h2 className="text-5xl md:text-6xl font-bold">Step Into Style</h2>
          <p className="text-lg md:text-xl mt-4 mb-8 max-w-3xl">
            Discover the latest sneaker collection. Explore our curated selection of the most sought-after sneakers from top brands. From timeless classics to the latest drops, find your perfect pair at Tredex.
          </p>
          <Link href="/products">
            <Button size="lg" className="text-lg px-8 py-6">Shop Now</Button>
          </Link>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
            <div className="flex flex-col items-center">
              <Truck className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground">Get your new sneakers delivered to your door in no time.</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Authenticity Guaranteed</h3>
              <p className="text-muted-foreground">We verify every item to ensure it&apos;s 100% authentic.</p>
            </div>
            <div className="flex flex-col items-center">
              <Boxes className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="text-muted-foreground">Choose from a huge variety of sneakers from all your favorite brands.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
