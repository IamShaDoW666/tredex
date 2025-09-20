
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import ProductImageGallery from '@/components/feature/product-detail/ProductImageGallery';
import ProductInfo from '@/components/feature/product-detail/ProductInfo';
import AddToCartButton from '@/components/feature/product-detail/AddToCartButton';
import { ProductSizeSelector } from '@/components/feature/product-detail/product-size-selector';
import { gsap } from 'gsap';
import { ProductDetailSkeleton } from '@/components/feature/product-detail/ProductDetailSkeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RelatedProducts } from '@/components/feature/product-detail/RelatedProducts';
import { IProduct } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from '@/actions/product-actions';

const ProductDetailClient = ({ id }: { id: string }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await getProductById(id);
      if (!response.status) {
        throw new Error(response.error || "Failed to fetch product");
      }
      return response.data;
    },
  });

  const product: IProduct | undefined = data as IProduct;
  const root = useRef(null);

  useLayoutEffect(() => {
    if (!isLoading && product) {
      const tl = gsap.timeline();
      tl.from('.product-image', { opacity: 0, scale: 0.9, duration: 0.5 });
      tl.from('.product-info', { opacity: 0, y: 50, duration: 0.5 }, '-=0.3');
    }
  }, [isLoading, product]);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return (
      <div className="mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            There was an error loading the product details. {error?.message}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div ref={root} className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg product-image">
          {product.images?.length > 0 &&
            <ProductImageGallery images={product.images} />}
        </div>
        <div className="space-y-8 product-info">
          <ProductInfo product={product} name={product.name} price={product.price} description={product.description || ''} />
          <ProductSizeSelector sizes={product.sizes} />
          <AddToCartButton sizes={product.sizes} />
        </div>
      </div>
      <RelatedProducts currentProductId={id} />
    </div>
  );
};

export default ProductDetailClient
