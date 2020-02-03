import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { fieldError, resultSuccess, userNotFound } from '../../core/router';
import userDal from '../user/dal';
import sessionDal from './dal';
import { secret } from '../../config';

export const create = async (req: Request, res: Response) => {
  const email: string = req.body?.email.trim();
  if (!email) {
    return res.status(400).json(fieldError('email', 'Please provide email'));
  }
  
  const password: string = req.body?.password.trim();
  if (!password) {
    return res.status(400).json(fieldError('password', 'Please provide password'));
  }
  
  const user = await userDal.findOne('email', email)
  if (!user) {
    return res.status(400).json(userNotFound());
  }

  if (user.password !== password) {
    return res.status(400).json(userNotFound());
  }

  const token = jwt.sign({ sub: user.email }, secret);
  await sessionDal.insert({ email, token });
  
  return res.json(resultSuccess({ token }));
};

