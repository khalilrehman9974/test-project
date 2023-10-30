import {Request, Response, NextFunction} from 'express';
import {logger, BadRequestError, BadRequestResponse} from '../util';

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<unknown>;

export const handleContentLength = () => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<unknown> => {
    const taskName = 'HANDLE_CONTENT_SIZE';
    logger.info(`${taskName}`, req.headers);
    try {
      if (parseInt(req.headers['content-length']) > 152000000) {
        logger.info(`${taskName}_CONTENT_LENGTH_EXCEDED`, req.headers);
        const noResult = new BadRequestResponse(
          res,
          'Content size upload limited to 150MBs'
        );
        return noResult.send();
      } else next();
    } catch (error) {
      next(new BadRequestError(error.message));
      return;
    }
  };
};
