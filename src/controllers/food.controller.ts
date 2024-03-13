import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { FoodService } from '../services/food.service';

@injectable()
export class FoodController {
   constructor (@inject('FoodService') private foodService: FoodService) {}

   create = async (request: Request, response: Response) => {
      const body = request.body;
      const userId = response.locals.decode.id;

      const create = await this.foodService.create(body, userId);
      return response.status(201).json({ message: create });
   };

   findOne = async (request: Request, response: Response) => {
      const params = request.params.id;
      const find = await this.foodService.findOne(params);
      return response.status(200).json({ message: find });
   };

   findMany = async (request: Request, response: Response) => {
      const find = await this.foodService.findMany();
      return response.status(200).json({ message: find });
   };

   update = async (request: Request, response: Response) => {
      const body = request.body;
      const params = String(request.params.id);

      const update = await this.foodService.update(params, body);
      return response.status(201).json({ message: update });
   };

   createClientFood = async (request: Request, response: Response) => {
      const foodId = request.params.id;
      const clientId = request.body.clientId;
      console.log(clientId, 'id');

      const update = await this.foodService.createClientFood(foodId, clientId);
      return response.status(201).json({ message: update });
   };

   delete = async (request: Request, response: Response) => {
      const params = String(request.params.id);

      const remove = await this.foodService.delete(params);
      return response.status(204).json({ message: remove });
   };
}
