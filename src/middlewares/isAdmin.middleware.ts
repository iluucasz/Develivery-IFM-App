import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class IsAdmin {
   static execute = async (request: Request, response: Response, next: NextFunction) => {
      const id = response.locals.decode.id;

      const user = await prisma.user.findUnique({
         where: { id }
      });

      if (user?.admin === false) {
         throw new AppError(401, 'Only admin can created food');
      }
      next();
   };
}
