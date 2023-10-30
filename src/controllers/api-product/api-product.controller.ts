import {Request, Response} from 'express';
import {constants} from '../../util/constants';

import {
  BadRequestResponse,
  InternalErrorResponse,
  logger,
  SuccessResponse,
} from '../../util';
import {ProductRepository} from '../../repositories/product.repo';
export class ProductController {
  static productRepo = new ProductRepository();

  /**
   * Get product stock
   * @param req
   * @param res
   */
  public static async getStockBySku(
    req: Request,
    res: Response
  ): Promise<void> {
    const taskName = 'GET_USER_AUDIT_LOG_LIST';
    try {
      logger.info(`${taskName}_REQ`, JSON.stringify(req.params));

      const {sku} = req.query;
      if (!sku || sku === '') {
        logger.info(`${taskName}_SKU_MISSING`, sku);
        const noResult = new BadRequestResponse(res, 'Sku is missing');
        return noResult.send();
      }

      const stock: any = await ProductController.productRepo.getProductStockBySku();
      const transactions: any = await ProductController.productRepo.getTrasactions();

      //Find stock by sku.
      const stockData = transactions.find(
        (element: any) => element.sku === sku
      );

      //in case no sku or data found.
      if (!stockData || stockData.length <= 0) {
        logger.info(`${taskName}_NO_CONTENT_FOUND`, stock);
        const noResult = new BadRequestResponse(
          res,
          'No data found for the provided sku OR provided sku does not exists.'
        );
        return noResult.send();
      }
      const success = new SuccessResponse(res, 'success', stockData);
      return success.send();
    } catch (err) {
      logger.error(`${taskName}_ERROR`, err);
      const response = new InternalErrorResponse(
        res,
        constants.erroMessage.unexpectedError
      );
      return response.send();
    }
  }
}
