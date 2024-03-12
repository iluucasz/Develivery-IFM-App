import { prisma } from '../database/db';
import {
   TCreateFood,
   TCreateFoodReturn,
   TFoodReturn,
   TUpdateFood,
   TUpdateFoodReturn
} from '../interfaces/food.interface';
import { foodSchema } from '../schemas/food.schema';

export class FoodService {
   create = async (body: TCreateFood, userId: string): Promise<TCreateFoodReturn> => {
      const food = await prisma.food.create({
         data: { ...body, userId }
      });
      return foodSchema.parse(food);
   };

   findOne = async (id: string): Promise<TFoodReturn | null> => {
      const food = await prisma.food.findUnique({
         where: {
            id
         }
      });

      return food;
   };

   findMany = async (): Promise<any> => {
      const food = await prisma.food.findMany({
         include: {
            clients: {
               select: {
                  client: true
               }
            }
         }
      });
      return food;
   };

   update = async (id: string, body: TUpdateFood): Promise<TUpdateFoodReturn> => {
      const food = await prisma.food.update({
         where: {
            id
         },
         data: body
      });
      return food;
   };

   delete = async (id: string): Promise<any> => {
      const food = await prisma.food.delete({
         where: {
            id
         }
      });
      return food;
   };
}
