import Hero from '@/components/feature/landing-page/Hero';
import ProductGrid from '@/components/feature/landing-page/ProductGrid';
import { Suspense } from 'react';
const LandingPage = async () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid title='Featured Products' />
      </Suspense>
    </div>
  );
};

export default LandingPage;
