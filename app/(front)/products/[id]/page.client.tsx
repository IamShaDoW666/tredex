
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { useProduct } from '@/hooks/use-products';
import ProductImageGallery from '@/components/feature/product-detail/ProductImageGallery';
import ProductInfo from '@/components/feature/product-detail/ProductInfo';
import AddToCartButton from '@/components/feature/product-detail/AddToCartButton';
import { ProductSizeSelector } from '@/components/feature/product-detail/product-size-selector';
import { gsap } from 'gsap';

const ProductDetailClient = ({ id }: { id: string }) => {
  const { data: product, isLoading, isError } = useProduct(id);
  const root = useRef(null);

  useLayoutEffect(() => {
    if (!isLoading && product) {
      const tl = gsap.timeline();
      tl.from('.product-image', { opacity: 0, scale: 0.9, duration: 0.5 });
      tl.from('.product-info', { opacity: 0, y: 50, duration: 0.5 }, '-=0.3');
    }
  }, [isLoading, product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading product.</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div ref={root} className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg">
          {product.images?.length > 0 &&
            <ProductImageGallery images={product.images} />}
        </div>
        <div className="space-y-8">
          <ProductInfo product={product} name={product.name} price={product.price} description={product.description || ''} />
          <ProductSizeSelector sizes={product.sizes} />
          <AddToCartButton sizes={product.sizes} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient
