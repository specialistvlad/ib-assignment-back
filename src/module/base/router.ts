import { Express, Router, Request, Response } from 'express';

export const defaultRouterOptions = { caseSensitive: false };

export const fieldError = (field: string, description: string) => ({
  result: 'fieldError',
  field,
  description,
});

export const resultSuccess = (id: string) => ({
  result: 'ok',
  id,
});

export const noRouteMatch = () => ({
  result: 'no route match',
});

export const userNotFound = () => ({
  result: 'User not found',
});

export const define404 = (app: Express | Router) => {
  // @ts-ignore
  app.use('*', function(req: Request, res: Response) {
    res.status(404).json(noRouteMatch());
  });
}