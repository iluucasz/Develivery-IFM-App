import { Router } from 'express';
import { ClientController } from '../controllers/client.controller';
import { container } from 'tsyringe';
import { ClientService } from '../services/client.service';

container.registerSingleton('ClientService', ClientService);
const clientController: ClientController = container.resolve(ClientController);

export const clientRouter = Router();

clientRouter.post('/:id', (req, res) => {
   clientController.create(req, res);
});
clientRouter.get('/:id', (req, res) => {
   clientController.findOne(req, res);
});
clientRouter.get('/', (req, res) => {
   clientController.findMany(req, res);
});
clientRouter.patch('/:id', (req, res) => {
   clientController.update(req, res);
});
clientRouter.delete('/:id', (req, res) => {
   clientController.delete(req, res);
});
