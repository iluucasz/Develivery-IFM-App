import z from 'zod';
import { clientSchema, clientSchemaCreate, clientSchemaFind, clientSchemaUpdate } from '../schemas/client.schema';

export type TClient = z.infer<typeof clientSchemaCreate>;
export type TClientFind = z.infer<typeof clientSchemaFind>;
export type TClientReturn = z.infer<typeof clientSchema>;
export type TClientUpdate = z.infer<typeof clientSchemaUpdate>;
