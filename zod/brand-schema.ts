import { z } from 'zod';

export const brandSchema = z.object({
  name: z.string().min(1, 'Brand name is required.').max(250, 'Brand name cannot exceed 250 characters.'),
});
