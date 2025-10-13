import { z } from 'zod';

export const orderSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone is required'),
    address: z.string().min(1, 'Address is required'),
    pincode: z.string().optional(),
    extraDetails: z.string().optional(),
    product: z.string().min(1, 'Product is required'),
});
