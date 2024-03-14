import { container } from 'tsyringe';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.middleware';
import { userSchemaCreate, userSchemaLogin, userSchemaUpdate, userSchemaUpdateUser } from '../schemas/user.schema';
import { AlreadyRegistered } from '../middlewares/alreadyRegistered.middleware';
import { AuthToken } from '../middlewares/authToken.middleware';
import { AuthOwner } from '../middlewares/AuthOwner.middleware';
import { ValidateId } from '../middlewares/validateId.middleware';
import { IsAdmin } from '../middlewares/isAdmin.middleware';

container.registerSingleton('UserService', UserService);
const userController = container.resolve(UserController);

export const userRouter = Router();

userRouter.post('/register', validateBody.execute(userSchemaCreate), AlreadyRegistered.execute, (req, res) => {
   userController.create(req, res);
});
userRouter.post('/login', validateBody.execute(userSchemaLogin), userController.login);

userRouter.get('/:id', ValidateId.user, AuthToken.execute, AuthOwner.user, (req, res) => {
   userController.findOne(req, res);
});
userRouter.get('/', AuthToken.execute, IsAdmin.execute, (req, res) => {
   userController.findAll(req, res);
});
userRouter.patch('/', validateBody.execute(userSchemaUpdate), userController.update);
userRouter.patch(
   '/:id',
   ValidateId.user,
   validateBody.execute(userSchemaUpdateUser),
   AuthToken.execute,
   AuthOwner.user,
   userController.updateUser
);
userRouter.delete('/:id', ValidateId.user, AuthToken.execute, AuthOwner.user, (req, res) => {
   userController.delete(req, res);
});
