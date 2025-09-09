"use client";

import React from 'react';
import Image from 'next/image';
import { Sneaker } from '@/lib/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import TiltedCard from '@/components/TiltedCard';

interface ProductCardProps {
  product: Sneaker;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <TiltedCard>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <Image src={product.image} alt={product.name} width={400} height={400} className="object-cover" />
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <h3 className="font-bold">{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </CardFooter>
      </Card>
    </TiltedCard>
  );
};

export default ProductCard;
