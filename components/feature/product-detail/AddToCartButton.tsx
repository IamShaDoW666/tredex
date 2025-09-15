'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from "react-icons/fa";
import { useProductStore } from '@/hooks/use-product-store';

interface AddToCartButtonProps {
  sizes: string[];
}

const AddToCartButton = ({ sizes }: AddToCartButtonProps) => {
  const { selectedSize } = useProductStore();

  const handleAddToCart = () => {
    // Logic to add to cart will be implemented later
    console.log('Added to cart with size:', selectedSize);
  };

  const hasSizes = sizes && sizes.length > 0;
  const isDisabled = hasSizes && !selectedSize;

  return (
    <Button className='bg-green-400' onClick={handleAddToCart} disabled={isDisabled}>
      Order on Whatsapp <FaWhatsapp />
    </Button>
  );
};

export default AddToCartButton;