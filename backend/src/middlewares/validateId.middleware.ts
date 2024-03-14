import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class ValidateId {
   static user = async (request: Request, response: Response, next: NextFunction) => {
      const id = request.params.id;

      const user = await prisma.user.findUnique({ where: { id } });

      if (!user || !id) {
         throw new AppError(404, 'User not found');
      }

      next();
   };
   static food = async (request: Request, response: Response, next: NextFunction) => {
      const id = request.params.id;

      const user = await prisma.food.findUnique({ where: { id } });

      if (!user || !id) {
         throw new AppError(404, 'Food not found');
      }

      next();
   };
   static client = async (request: Request, response: Response, next: NextFunction) => {
      const id = request.params.id;

      const client = await prisma.client.findUnique({ where: { id } });

      if (!client || !id) {
         throw new AppError(404, 'Client not found');
      }

      next();
   };
}
