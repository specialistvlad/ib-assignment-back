import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';

import { fieldError, resultSuccess, userNotFound } from '../../core/router';
import userDal from '../user/dal';
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

  const token = jwt.sign({
    sub: user.email,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
  }, secret);
  
  return res.json(resultSuccess({ token }));
};

export const jwtAuthentication = () => {
  return (req: Request, res: Response, next: Function) => {
    const token = req.headers.authorization?.split(' ') || [];
    
    jwt.verify(token[1], secret, e => {
      if (!e) {
        return next();
      }
      return res.status(401).json({
        result: e.toString(),
      });
    });
  };
}

