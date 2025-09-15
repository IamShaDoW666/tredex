import React from 'react';
import Header from '@/components/feature/landing-page/Header';
import Hero from '@/components/feature/landing-page/Hero';
import ProductGrid from '@/components/feature/landing-page/ProductGrid';
import { Suspense } from 'react';
import Footer from '@/components/feature/landing-page/Footer';
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  );
};

export default LandingPage;
