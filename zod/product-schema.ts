import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Product name is required.'),
  description: z.string().optional(),
  price: z.coerce.number<number>().min(0, 'Price cannot be negative.'),
  discountPrice: z.coerce.number<number>().min(0, 'Discount price cannot be negative.').optional(),
  category: z.string().min(1, 'Category is required.'),
  available: z.boolean().default(true).optional(),
  is_new: z.boolean().default(false).optional(),
  showInSlider: z.boolean().default(false).optional(),
  sex: z.enum(['Men', 'Women', 'Unisex']).default('Men').optional(),
  productType: z.string().optional(),
  images: z.array(z.instanceof(File).or(z.string())).optional(),
  sizes: z.string().optional(),
  brand: z.string().optional()
});
