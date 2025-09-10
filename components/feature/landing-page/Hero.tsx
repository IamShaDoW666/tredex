"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedContent from '@/components/AnimatedContent';
import { HeroParallax } from '@/components/ui/hero-parallax';
export const products = [
  {
    title: "Nike Air Force 1 '07",
    link: "http://localhost:3000",
    thumbnail:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
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
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374915/01/sv01/fnd/PNA/fmt/png/Suede-Classic-XXI-Men's-Sneakers",
  },
];

const Hero = () => {
  return (
    <>
      <HeroParallax products={products} />
      <section className="relative h-[100vh] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1200x800/black/white?text=Hero+BG')" }}>
        <div className="absolute inset-0 bg-background bg-opacity-50 flex flex-col justify-center items-center text-foreground">
          <h2 className="text-6xl font-bold">Step Into Style</h2>
          <p className="text-xl mt-4 mb-8">Discover the latest sneaker collection</p>
          <Button size="lg">Shop Now</Button>
        </div>
      </section>
    </>
  );
};

export default Hero;
