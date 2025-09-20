import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required.'),
  description: z.string().optional(),
  price: z.number().min(0, 'Price cannot be negative.'),
  discountPrice: z.number().min(0, 'Discount price cannot be negative.').optional(),
  // sizes: z.array(z.string()),
  category: z.string().min(1, 'Category is required.'),
  available: z.boolean().default(true),
  is_new: z.boolean().default(false),
  sex: z.enum(['Men', 'Women', 'Unisex']).default('Men'),
  productType: z.string().optional(),
  // images: z.array(z.instanceof(File))
});
