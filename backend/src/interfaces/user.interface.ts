import { z } from 'zod';
import {
   userFindSchema,
   userSchemaCreate,
   userSchemaCreateReturn,
   userSchemaFindManyReturn,
   userSchemaFindOne,
   userSchemaLogin,
   userSchemaUpdate,
   userSchemaUpdateReturn
} from '../schemas/user.schema';

export type TUserCreate = z.infer<typeof userSchemaCreate>;
export type TUserLogin = z.infer<typeof userSchemaLogin>;
export type TUserCreateReturn = z.infer<typeof userSchemaCreateReturn>;
export type TUserManyReturn = z.infer<typeof userSchemaFindManyReturn>;
export type TUserOneReturn = z.infer<typeof userSchemaFindOne>;
export type TUserUpdate = z.infer<typeof userSchemaUpdate>;
export type TUserUpdateReturn = z.infer<typeof userSchemaUpdateReturn>;
export type TUserFind = z.infer<typeof userFindSchema>;

export type TUserPayload = {
   AccessToken: string;
   user: TUserCreateReturn;
};
