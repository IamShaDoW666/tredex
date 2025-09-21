import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string().min(1, { message: 'Category name is required.' }).max(250),
  description: z.string().max(500).optional(),
  products: z.array(z.string()).optional(),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;
