import React from 'react';
import Header from '@/components/feature/landing-page/Header';
import Hero from '@/components/feature/landing-page/Hero';
import ProductGrid from '@/components/feature/landing-page/ProductGrid';
import Footer from '@/components/feature/landing-page/Footer';
import ScrollVelocity from '@/components/ScrollVelocity';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default LandingPage;
