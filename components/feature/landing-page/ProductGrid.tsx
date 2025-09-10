"use client";

import React from 'react';
import ProductCard from './ProductCard';
import AnimatedContent from '@/components/AnimatedContent';
import { IProduct } from '@/model/productSchema';

interface ProductGridProps {
  products: IProduct[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <AnimatedContent>
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </AnimatedContent>
  );
};

export default ProductGrid;
