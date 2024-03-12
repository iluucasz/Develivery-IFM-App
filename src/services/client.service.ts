import { prisma } from '../database/db';
import { TClient, TClientFind, TClientReturn } from '../interfaces/client.interface';
import { clientSchema } from '../schemas/client.schema';

export class ClientService {
   create = async (foodId: string, body: TClient): Promise<TClientReturn> => {
      const client = await prisma.client.create({
         data: {
            ...body,
            foods: {
               create: [
                  {
                     food: {
                        connect: { id: foodId }
                     }
                  }
               ]
            }
         }
      });
      return clientSchema.parse(client);
   };

   findOne = async (id: string): Promise<TClientFind | null> => {
      const client = await prisma.client.findUnique({
         where: { id },
         include: {
            foods: {
               select: { foodId: true }
            }
         }
      });
      return client;
   };

   findMany = async (): Promise<TClientFind[] | null> => {
      const client = await prisma.client.findMany({
         include: {
            foods: {
               select: { foodId: true }
            }
         }
      });
      return client;
   };

   update = async (id: string, body: any): Promise<TClient> => {
      const client = await prisma.client.update({
         where: { id },
         data: body
      });
      return clientSchema.parse(client);
   };

   delete = async (id: string): Promise<any> => {
      const client = await prisma.client.delete({
         where: { id }
      });
      return client;
   };
}
