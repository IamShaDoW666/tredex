"use client";

import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useProducts } from '@/hooks/use-products';
import { Skeleton } from '@/components/ui/skeleton';
import { IProduct } from '@/model/productSchema';
import { Search } from './Search';
import { Sort } from './Sort';
import { Filter } from './Filter';
import { PriceRangeSlider } from './PriceRangeSlider';
import { useSearchParams } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const ProductGrid: React.FC = () => {
  const searchParams = useSearchParams();
  const limit = parseInt(searchParams.get('limit') || '20', 10);
  const search = searchParams.get('search') || '';
  const sort = searchParams.get('sort') || '';
  const order = searchParams.get('order') || '';
  const category = searchParams.get('category') || '';
  const size = searchParams.get('size') || '';
  const color = searchParams.get('color') || '';
  const brand = searchParams.get('brand') || '';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useProducts(limit, search, sort, order, category, size, color, brand, minPrice, maxPrice);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="space-y-8">
            <Search />
            <Filter />
            <PriceRangeSlider />
          </div>
        </div>
        <div className="col-span-9">
          <div className="flex justify-end mb-4">
            <Sort />
          </div>
          {status === 'pending' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <Skeleton key={i} className="h-80 w-full" />
              ))}
            </div>
          ) : status === 'error' ? (
            <p>Error: {error.message}</p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {data.pages.map((group, i) => (
                  <React.Fragment key={i}>
                    {group.data.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div>
                <button
                  ref={ref}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? 'Loading more...'
                    : ''}
                </button>
              </div>
              <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
