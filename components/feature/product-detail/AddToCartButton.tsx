'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from "react-icons/fa";

const AddToCartButton = () => {
  const handleAddToCart = () => {
    // Logic to add to cart will be implemented later
    console.log('Added to cart');
  };

  return (
    <Button className='bg-green-400' onClick={handleAddToCart}>Order on Whatsapp <FaWhatsapp /></Button>
  );
};

export default AddToCartButton;
