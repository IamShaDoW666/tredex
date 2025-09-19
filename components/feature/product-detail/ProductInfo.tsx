import { IProduct } from '@/lib/types';
import React from 'react';

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
  product: IProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, price, description }) => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{name}</h1>
      <div className='flex gap-x-4'>
        <p className="text-2xl text-muted-foreground line-through font-semibold">₹ 4000</p>
        <p className="text-2xl font-semibold">₹ {price}</p>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ProductInfo;
