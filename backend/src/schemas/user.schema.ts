import { z } from 'zod';
import { foodSchema } from './food.schema';

export const userSchema = z.object({
   id: z.string(),
   name: z.string(),
   email: z.string(),
   admin: z.boolean(),
   password: z.string(),
   foods: z.array(foodSchema)
});

export const userSchemaFindManyReturn = userSchema.omit({ password: true, email: true });
export const userSchemaFindOne = userSchema.omit({ password: true });

export const userSchemaCreate = userSchema.omit({ id: true, foods: true });
export const userSchemaCreateReturn = userSchema.omit({ password: true, foods: true });

export const userSchemaLogin = userSchema.pick({ email: true, password: true });

export const userSchemaUpdate = userSchema.pick({ name: true, email: true, password: true });
export const userSchemaUpdateReturn = userSchema.pick({ id: true, name: true });

export const userFindSchema = userSchema.omit({ foods: true });

export const userSchemaUpdateUser = userSchema.pick({ name: true }).extend({
   oldPassword: z.string(),
   newPassword: z.string().optional()
});
