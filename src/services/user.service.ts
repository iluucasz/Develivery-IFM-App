import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';
import { AppError } from '../errors/AppError.error';
import {
   TUserCreate,
   TUserCreateReturn,
   TUserLogin,
   TUserManyReturn,
   TUserOneReturn,
   TUserPayload,
   TUserUpdate
} from '../interfaces/user.interface';
import { userSchemaCreateReturn, userSchemaFindManyReturn, userSchemaFindOne } from '../schemas/user.schema';
import { prisma } from '../database/db';

@injectable()
export class UserService {
   create = async (body: TUserCreate): Promise<TUserCreateReturn> => {
      const passwordHash = await bcrypt.hash(body.password, 10);

      const userBody = { ...body, password: passwordHash };

      const user = await prisma.user.create({
         data: userBody
      });

      return userSchemaCreateReturn.parse(user);
   };

   login = async (body: TUserLogin): Promise<TUserPayload> => {
      const user = await prisma.user.findUnique({ where: { email: body.email } });

      if (!user) {
         throw new AppError(401, 'Email/Password invalid');
      }

      const compare = await bcrypt.compare(body.password, user.password);

      if (!compare) {
         throw new AppError(401, 'Email/Password invalid');
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!);

      return { AccessToken: token, user: userSchemaCreateReturn.parse(user) };
   };

   findAll = async (): Promise<TUserManyReturn[] | null> => {
      const user = await prisma.user.findMany({
         include: { foods: true }
      });

      const parsed = user.map(user => userSchemaFindManyReturn.parse(user));

      return parsed;
   };

   findOne = async (id: string): Promise<TUserOneReturn | null> => {
      const user = await prisma.user.findUnique({
         where: { id },
         include: { foods: true }
      });
      return userSchemaFindOne.parse(user);
   };

   update = async (body: TUserUpdate, newPassword: string): Promise<TUserCreateReturn> => {
      const user = await prisma.user.findUnique({ where: { email: body.email } });

      if (!user || user.name !== body.name) {
         throw new AppError(404, 'User not found');
      }

      const passwordHash = await bcrypt.hash(newPassword, 10);

      const updatedUser = await prisma.user.update({
         where: { email: body.email },
         data: { password: passwordHash }
      });

      return userSchemaCreateReturn.parse(updatedUser);
   };

   updateUser = async (
      id: string,
      name: string,
      oldPassword: string,
      newPassword?: string
   ): Promise<TUserCreateReturn> => {
      const user = await prisma.user.findUnique({
         where: { id }
      });

      if (!user) {
         throw new AppError(404, 'User not found');
      }

      const updateData: { name: string; password?: string } = {
         name
      };

      if (oldPassword) {
         const isOldPasswordCorrect = await bcrypt.compare(oldPassword, user.password);
         if (!isOldPasswordCorrect) {
            throw new AppError(400, 'Old Password Invalid');
         }
      }

      if (oldPassword && newPassword) {
         const hashedNewPassword = await bcrypt.hash(newPassword, 10);
         updateData.password = hashedNewPassword;
      }

      const updatedUser = await prisma.user.update({
         where: { id },
         data: updateData
      });
      return userSchemaCreateReturn.parse(updatedUser);
   };

   delete = async (id: string): Promise<any> => {
      const user = await prisma.user.delete({
         where: { id }
      });
      return user;
   };
}
