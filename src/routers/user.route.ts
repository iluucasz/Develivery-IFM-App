import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.middleware';
import { userSchemaCreate, userSchemaLogin } from '../schemas/user.schema';
import { AlreadyRegistered } from '../middlewares/alreadyRegistered.middleware';

container.registerSingleton('UserService', UserService);
const userController = container.resolve(UserController);

export const userRouter = Router();

userRouter.post('/register', validateBody.execute(userSchemaCreate), AlreadyRegistered.execute, (req, res) => {
   userController.create(req, res);
});
userRouter.post('/login', validateBody.execute(userSchemaLogin), (req, res) => {
   userController.login(req, res);
});
userRouter.get('/:id', (req, res) => {
   userController.findOne(req, res);
});
userRouter.get('/', (req, res) => {
   userController.findAll(req, res);
});
userRouter.patch('/', (req, res) => {
   userController.update(req, res);
});

userRouter.delete('/:id', (req, res) => {
   userController.delete(req, res);
});
