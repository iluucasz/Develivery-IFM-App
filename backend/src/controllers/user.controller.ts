import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UserService } from '../services/user.service';

@injectable()
export class UserController {
   constructor (@inject('UserService') private userService: UserService) {}

   create = async (request: Request, response: Response): Promise<Response> => {
      const body = request.body;
      const register = await this.userService.create(body);
      return response.status(201).json(register);
   };

   login = async (request: Request, response: Response): Promise<Response> => {
      const body = request.body;
      const login = await this.userService.login(body);
      return response.status(200).json(login);
   };

   findAll = async (request: Request, response: Response): Promise<Response> => {
      const find = await this.userService.findAll();
      return response.status(200).json(find);
   };

   findOne = async (request: Request, response: Response): Promise<Response> => {
      const id = response.locals.decode.id;
      const find = await this.userService.findOne(id);
      return response.status(200).json(find);
   };

   update = async (request: Request, response: Response): Promise<Response> => {
      const body = request.body;
      const password = request.body.password;
      const update = await this.userService.update(body, password);
      return response.status(201).json({ message: 'password updated with sucess' });
   };

   updateUser = async (request: Request, response: Response): Promise<Response> => {
      const params = request.params.id;
      const name = request.body.name;
      const oldPassword = request.body.oldPassword;
      const password = request.body.password;
      const update = await this.userService.updateUser(params, name, oldPassword, password);
      return response.status(201).json(update);
   };

   delete = async (request: Request, response: Response): Promise<Response> => {
      const id = request.params.id;
      const remove = await this.userService.delete(id);
      return response.status(204).json(remove);
   };
}
