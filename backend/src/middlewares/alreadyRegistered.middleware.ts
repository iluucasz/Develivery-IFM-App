import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class AlreadyRegistered {
   static execute = async (req: Request, res: Response, next: NextFunction) => {
      const email = await prisma.user.findFirst({ where: { email: req.body.email } });

      if (email) {
         throw new AppError(403, 'E-mail already registered');
      }

      return next();
   };
}
