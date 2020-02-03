import { Request, Response } from 'express';
import { fieldError, resultSuccess } from '../base/router';
import userDal from './dal';

export const create = async (req: Request, res: Response) => {
  
  const email: string = req.body?.email;
  if (!email) {
    return res.status(400).json(fieldError('email', 'Incorrect email'));
  }
  
  const password: string = req.body?.email;
  if (!password) {
    return res.status(400).json(fieldError('password', 'Please provide password'));
  }
  
  if (await userDal.findOne('email', email)) {
    return res.status(400).json(fieldError('email', 'Incorrect email'));
  }

  const id = await userDal.insert({ email, password });

  return res.json(resultSuccess(id as string));
};

