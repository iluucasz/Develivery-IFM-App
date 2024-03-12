import z from 'zod';
import { createFoodSchema, foodSchema, updateFoodSchema } from '../schemas/food.schema';

export type TCreateFood = z.infer<typeof createFoodSchema>;
export type TCreateFoodReturn = z.infer<typeof foodSchema>;
export type TFoodReturn = z.infer<typeof foodSchema>;
export type TUpdateFood = z.infer<typeof updateFoodSchema>;
export type TUpdateFoodReturn = z.infer<typeof foodSchema>;
