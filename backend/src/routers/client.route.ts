import { Router } from 'express';
import { ClientController } from '../controllers/client.controller';
import { container } from 'tsyringe';
import { ClientService } from '../services/client.service';
import { AuthToken } from '../middlewares/authToken.middleware';
import { IsAdmin } from '../middlewares/isAdmin.middleware';
import { ValidateId } from '../middlewares/validateId.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { clientSchemaCreate, clientSchemaCreateStatus, clientSchemaUpdate } from '../schemas/client.schema';

container.registerSingleton('ClientService', ClientService);
const clientController: ClientController = container.resolve(ClientController);

export const clientRouter = Router();

clientRouter.post(
   '/:id',
   validateBody.execute(clientSchemaCreate),
   ValidateId.food,
   AuthToken.execute,
   IsAdmin.execute,
   (req, res) => {
      clientController.create(req, res);
   }
);
clientRouter.get('/:id', ValidateId.client, AuthToken.execute, (req, res) => {
   clientController.findOne(req, res);
});
clientRouter.get('/', AuthToken.execute, (req, res) => {
   clientController.findMany(req, res);
});
clientRouter.patch(
   '/:id',
   validateBody.execute(clientSchemaUpdate),
   ValidateId.client,
   AuthToken.execute,
   IsAdmin.execute,
   (req, res) => {
      clientController.update(req, res);
   }
);
clientRouter.patch(
   '/:id/status',
   validateBody.execute(clientSchemaCreateStatus),
   ValidateId.client,
   AuthToken.execute,
   (req, res) => {
      clientController.updateStatus(req, res);
   }
);
clientRouter.delete('/:id', ValidateId.client, AuthToken.execute, IsAdmin.execute, (req, res) => {
   clientController.delete(req, res);
});
