'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/model/productSchema';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const isNew = Math.random() > 0.5; // Placeholder for demonstration

  return (
    <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg rounded-lg">
      <div className="relative bg-background aspect-square">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-t-lg"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          {product.discountPrice && (
            <Badge variant="destructive">Sale</Badge>
          )}
          {isNew && (
            <Badge variant="secondary">New</Badge>
          )}
        </div>
      </div>
      <CardFooter className="flex flex-col items-start p-4 bg-background/80 backdrop-blur-sm">
        <h3 className="font-bold text-lg truncate w-full">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.productType}</p>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center gap-x-2">
            {product.discountPrice ? (
              <>
                <p className="font-semibold text-lg">
                  ${product.discountPrice.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="font-semibold text-lg">${product.price.toFixed(2)}</p>
            )}
          </div>
          <div className='flex items-center gap-x-2'>
            <Button variant="outline" size="sm">View</Button>
            <Button variant="default" className='w-18' size="sm">Buy</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

