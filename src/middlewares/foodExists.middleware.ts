import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class FoodExists {
   static execute = async (request: Request, response: Response, next: NextFunction) => {
      const name = request.body.name;

      const food = await prisma.food.findUnique({
         where: {
            name
         }
      });

      if (food) {
         throw new AppError(409, 'This food already exists');
      }

      next();
   };
}
