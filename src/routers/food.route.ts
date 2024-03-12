import { Router } from 'express';
import { FoodController } from '../controllers/food.controller';
import { FoodService } from '../services/food.service';
import { container } from 'tsyringe';

container.registerSingleton('FoodService', FoodService);
const foodController: FoodController = container.resolve(FoodController);

export const foodRouter = Router();

foodRouter.post('/', (req, res) => {
   foodController.create(req, res);
});
foodRouter.get('/:id', (req, res) => {
   foodController.findOne(req, res);
});
foodRouter.get('/', (req, res) => {
   foodController.findMany(req, res);
});
foodRouter.patch('/:id', (req, res) => {
   foodController.update(req, res);
});
foodRouter.delete('/:id', (req, res) => {
   foodController.delete(req, res);
});
