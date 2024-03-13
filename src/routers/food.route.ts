import { Router } from 'express';
import { FoodController } from '../controllers/food.controller';
import { FoodService } from '../services/food.service';
import { container } from 'tsyringe';
import { AuthToken } from '../middlewares/authToken.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { createFoodSchema, updateFoodSchema } from '../schemas/food.schema';
import { AuthOwner } from '../middlewares/AuthOwner.middleware';
import { IsAdmin } from '../middlewares/isAdmin.middleware';
import { ValidateId } from '../middlewares/validateId.middleware';
import { FoodExists } from '../middlewares/foodExists.middleware';

container.registerSingleton('FoodService', FoodService);
const foodController: FoodController = container.resolve(FoodController);

export const foodRouter = Router();

foodRouter.post(
   '/',
   validateBody.execute(createFoodSchema),
   AuthToken.execute,
   IsAdmin.execute,
   FoodExists.execute,
   (req, res) => {
      foodController.create(req, res);
   }
);
foodRouter.get('/:id', ValidateId.food, AuthToken.execute, AuthOwner.food, (req, res) => {
   foodController.findOne(req, res);
});
foodRouter.get('/', AuthToken.execute, (req, res) => {
   foodController.findMany(req, res);
});
foodRouter.patch(
   '/:id',
   ValidateId.food,
   validateBody.execute(updateFoodSchema),
   AuthToken.execute,
   AuthOwner.food,
   IsAdmin.execute,
   (req, res) => {
      foodController.update(req, res);
   }
);
foodRouter.delete('/:id', ValidateId.food, AuthToken.execute, AuthOwner.food, IsAdmin.execute, (req, res) => {
   foodController.delete(req, res);
});
