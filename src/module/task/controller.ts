import { Request, Response } from 'express';
import { fieldError, resultSuccess } from '../../core/router';
import userDal from '../user/dal';
import taskDal from './dal';

export const create = async (req: Request, res: Response) => {
  const userId: string = req.body?.userId.trim();
  if (!userId) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }
  
  const title: string = req.body?.title.trim();
  if (!title) {
    return res.status(400).json(fieldError('title', 'Incorrect title'));
  }

  const description: string = req.body?.description.trim();
  if (!description) {
    return res.status(400).json(fieldError('description', 'Incorrect description'));
  }
  
  if (await userDal.findOneById(userId)) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }

  const id = await taskDal.insert({ userId, title, description });

  return res.json(resultSuccess({ id: id as string}));
};

