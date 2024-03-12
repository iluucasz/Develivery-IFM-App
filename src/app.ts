import 'express-async-errors';
import 'reflect-metadata';
import express, { Request, Response, json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { HandleErrors } from './middlewares/handleErrors.middleware';
import { userRouter } from './routers/user.route';
import { foodRouter } from './routers/food.route';
import { clientRouter } from './routers/client.route';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(json());
app.use('/user', userRouter);
app.use('/food', foodRouter);
app.use('/client', clientRouter);
app.use('/', (req: Request, res: Response) => {
   res.json({ Server: 'Delivery Api IFM' });
});
app.use(HandleErrors.execute);
