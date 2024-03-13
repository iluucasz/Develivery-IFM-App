import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ClientService } from '../services/client.service';

@injectable()
export class ClientController {
   constructor (@inject('ClientService') private clientService: ClientService) {}

   create = async (request: Request, response: Response): Promise<Response> => {
      const id = String(request.params.id);
      const body = request.body;
      const create = await this.clientService.create(id, body);

      return response.status(201).json({ message: create });
   };

   findOne = async (request: Request, response: Response): Promise<Response> => {
      const params = String(request.params.id);
      const search = await this.clientService.findOne(params);
      return response.status(200).json({ message: search });
   };

   findMany = async (request: Request, response: Response): Promise<Response> => {
      const search = await this.clientService.findMany();
      return response.status(200).json({ message: search });
   };

   update = async (request: Request, response: Response): Promise<Response> => {
      const params = String(request.params.id);
      const body = request.body;
      const update = await this.clientService.update(params, body);
      return response.status(201).json({ message: update });
   };
   updateStatus = async (request: Request, response: Response): Promise<Response> => {
      const params = String(request.params.id);
      const body = request.body;
      const update = await this.clientService.update(params, body);
      return response.status(201).json({ message: update });
   };

   delete = async (request: Request, response: Response): Promise<Response> => {
      const params = String(request.params.id);
      const del = await this.clientService.delete(params);
      return response.status(204).json({ message: del });
   };
}
