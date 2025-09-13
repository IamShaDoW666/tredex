'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IProduct } from '@/model/productSchema';
import { Separator } from '@/components/ui/separator';
import { ShineBorder } from '@/components/magicui/shine-border';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="overflow-hidden p-0 group relative">
      {product.is_new && <ShineBorder className='z-10' borderWidth={2} shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />}
      <div className="relative bg-background h-[20vh] sm:h-[20rem]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-fill w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-t-lg"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          {product.discountPrice && (
            <Badge variant="destructive">Sale</Badge>
          )}
          {product.is_new && (
            <Badge className='font-bold' variant="destructive">New</Badge>
          )}
        </div>
      </div>
      <CardFooter className="flex flex-col items-start p-4 py-0 ">
        <h3 className="font-bold sm:text-lg truncate w-full">{product.name}</h3>
        <p className="text-sm text-muted-foreground ">{product.productType}</p>
        <Separator className='my-2' />
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex items-center self-start gap-x-2">
            {product.discountPrice ? (
              <>
                <p className="text-sm text-muted-foreground line-through">
                  ₹{Number(4000)}
                </p>
                <p className="font-semibold text-lg">
                  ₹{product.price}
                </p>
              </>
            ) : (
              <p className="font-semibold text-lg">₹{product.price}</p>
            )}
          </div>
          <div className='flex justify-between items-center mb-2 sm:mb-4 self-end gap-x-2'>
            <Button variant="outline" size="sm">View</Button>
            <Button variant="default" className='w-18 hidden sm:block' size="sm">Buy</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

