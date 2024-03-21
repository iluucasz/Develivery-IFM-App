import z from 'zod';

export const foodSchema = z.object({
   name: z.string().min(1, 'Necessário digitar um nome'),
   price: z.string().min(1, 'Necessário determinar um preço'),
   description: z.string().optional(),
   userId: z.string()
});

export const foodSchemaForm = foodSchema.pick({ name: true, description: true });
