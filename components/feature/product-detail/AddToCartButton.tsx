'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from "react-icons/fa";
import { useProductStore } from '@/hooks/use-product-store';
import { WhatsappOrderModal } from '../whatsapp-order-modal';
import TermsAndConditionsModal from '@/components/feature/terms-and-conditions-modal';
import { IProduct } from '@/model/productSchema';
import { orderSchema } from '@/zod/order-schema';
import z from 'zod';

interface AddToCartButtonProps {
  sizes: string[];
  product: IProduct
}

const AddToCartButton = ({ sizes, product }: AddToCartButtonProps) => {
  const { selectedSize } = useProductStore();

  const handleAddToCart = () => {
    // Logic to add to cart will be implemented later
    console.log('Added to cart with size:', selectedSize);
  };

  const handleOrderSubmit = async (orderData: z.infer<typeof orderSchema>) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const createdOrder = await response.json();
      console.log('Order created:', createdOrder);

      // Construct WhatsApp message
      const whatsappMessage = `Hello, I want to order this item.\n\nProduct: ${product?.name}\nSize: ${selectedSize}\nQuantity: 1\nPrice: ₹${product.price}\n\nMy Name: ${orderData.name}\nAddress: ${orderData.address}\nPhone: ${orderData.phone} \n\nAdditional Info: ${orderData.extraDetails}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/917902708908?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const hasSizes = sizes && sizes.length > 0;
  const isDisabled = hasSizes && !selectedSize;

  return (
    <div className='flex items-center justify-between md:flex-row-reverse'>
      <TermsAndConditionsModal>
        <Button className='p-0' variant={'link'}>Terms and Conditions</Button>
      </TermsAndConditionsModal>
      <WhatsappOrderModal isDisabled={isDisabled} productId={product._id as string} onOrderSubmit={handleOrderSubmit}>
        <Button size={'lg'} className='bg-green-400 text-primary-foreground' onClick={handleAddToCart} disabled={isDisabled}>
          Order on Whatsapp <FaWhatsapp />
        </Button>
      </WhatsappOrderModal>
    </div>
  );
};

export default AddToCartButton;
