import { prisma } from '../database/db';
import { TClient, TClientFind, TClientReturn, TClientUpdate } from '../interfaces/client.interface';
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

   update = async (id: string, body: TClientUpdate): Promise<TClient> => {
      const client = await prisma.client.update({
         where: { id },
         data: body
      });
      return clientSchema.parse(client);
   };
   updateStatus = async (id: string, status: string): Promise<TClient> => {
      const client = await prisma.client.update({
         where: { id },
         data: {
            status
         }
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
