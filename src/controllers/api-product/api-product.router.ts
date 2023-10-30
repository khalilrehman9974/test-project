import express from 'express';
import {handleUserSession} from '../../middleware/handle-user-session';
import {asyncWrapper} from '../../middleware/async-wrapper';
import {ProductController} from './api-product.controller';
import {validator} from '../../middleware/validator';
import {auditTrailValidator} from './api-product.validator';
export const ProductRouter = express.Router();

ProductRouter.get('/get-stock-by-sku', [
  validator(auditTrailValidator.productParams, 'params'),
  handleUserSession(),
  asyncWrapper(ProductController.getStockBySku),
]);
