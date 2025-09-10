"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Spotlight } from '@/components/ui/spotlight';
export const products = [
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
  return (
    <>
      <HeroParallax products={products} />
      <div className="h-[100vh] flex flex-col justify-center items-center relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="bg-background bg-opacity-50 flex flex-col justify-center items-center text-foreground">
          <h2 className="text-6xl font-bold">Step Into Style</h2>
          <p className="text-xl mt-4 mb-8">Discover the latest sneaker collection</p>
          <Button size="lg">Shop Now</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
