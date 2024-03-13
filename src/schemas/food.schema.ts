import z from 'zod';

export const foodSchema = z.object({
   id: z.string(),
   name: z.string(),
   price: z.string(),
   description: z.string().nullish(),
   userId: z.string()
});

export const createFoodSchema = foodSchema.omit({ id: true, userId: true });
export const updateFoodSchema = foodSchema.omit({ id: true });
