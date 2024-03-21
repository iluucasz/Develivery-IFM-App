import { foodSchema, foodSchemaForm } from '@/schemas/food.schema';
import { z } from 'zod';

export type payLoadFood = z.infer<typeof foodSchema>;
