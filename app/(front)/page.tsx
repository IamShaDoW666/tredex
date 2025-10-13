import Hero from '@/components/feature/landing-page/Hero';
import ProductGrid from '@/components/feature/landing-page/ProductGrid';
import WatchSunglass from '@/components/feature/landing-page/WatchSunglass';
import { Suspense } from 'react';
const LandingPage = async () => {
    return (
        <div>
            <Hero />
            <WatchSunglass />
            <Suspense fallback={<div>Loading...</div>}>
                <ProductGrid title='Featured Products' shoesOnly={true} />
            </Suspense>
        </div>
    );
};

export default LandingPage;
