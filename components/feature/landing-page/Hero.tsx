"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { Spotlight } from '@/components/ui/spotlight';
import Link from 'next/link';
import { Boxes, ShieldCheck, Truck } from 'lucide-react';
const Hero = () => {
    return (
        <>
            <HeroParallax />
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
                    <Link href="/collection">
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
