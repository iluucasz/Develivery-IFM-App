import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class AuthOwner {
   static user = async (request: Request, response: Response, next: NextFunction) => {
      const userId = response.locals.decode.id;
      const params = request.params.id;

      const user = await prisma.user.findUnique({
         where: { id: params }
      });

      if (user?.id !== userId) {
         throw new AppError(401, 'You are not allowed');
      }
      next();
   };
   static food = async (request: Request, response: Response, next: NextFunction) => {
      const userId = response.locals.decode.id;
      const params = request.params.id;

      const food = await prisma.food.findUnique({
         where: { id: params }
      });

      if (food?.userId !== userId) {
         throw new AppError(401, 'You are not allowed');
      }

      next();
   };
}
