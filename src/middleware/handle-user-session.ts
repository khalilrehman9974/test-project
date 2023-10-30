import {Request, Response, NextFunction} from 'express';
import {
  logger,
  BadRequestError,
  UnauthorizedResponse,
  BadRequestResponse,
} from '../util';

type ExpressMiddleware = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<unknown>;

export const handleUserSession = () => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<unknown> => {
    next();
    return;
  };
};
