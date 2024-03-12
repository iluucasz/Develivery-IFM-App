import z from 'zod';

export const clientSchema = z.object({
   id: z.string(),
   name: z.string(),
   description: z.string().nullish(),
   address: z.string(),
   amount: z.string(),
   status: z.string(),
   totalPay: z.string(),
   paid: z.boolean(),
   payment: z.string(),
   userCreator: z.string().nullish()
});

export const foodClientSchema = z.object({
   foodId: z.string(),
   clientId: z.string()
});

export const clientSchemaCreate = clientSchema.omit({ id: true });
export const clientSchemaFind = clientSchema.extend({
   foods: foodClientSchema.pick({ foodId: true }).array()
});
