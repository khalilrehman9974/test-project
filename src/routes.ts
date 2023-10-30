import express from 'express';
import {ProductRouter} from './controllers/api-product/api-product.router';

export const AppRouter = express.Router();

AppRouter.use('/product', ProductRouter);
