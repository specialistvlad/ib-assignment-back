import { Request, Response } from 'express';
import { fieldError, queryParamError, resultSuccess } from '../../core/router';
import userDal from '../user/dal';
import taskDal from './dal';

export const create = async (req: Request, res: Response) => {
  const userId: string = req.body?.userId?.trim();
  if (!userId) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }
  
  const title: string = req.body?.title?.trim();
  if (!title) {
    return res.status(400).json(fieldError('title', 'Incorrect title'));
  }

  const description: string = req.body?.description?.trim();
  if (!description) {
    return res.status(400).json(fieldError('description', 'Incorrect description'));
  }
  
  if (!await userDal.findOneById(userId)) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }

  const id = await taskDal.insert({ userId, title, description });

  return res.json(resultSuccess({ id: id as string}));
};

export const updateById = async (req: Request, res: Response) => {
  const taskId: string = req.params?.taskId?.trim();
  if (!taskId) {
    return res.status(400).json(queryParamError('taskId', 'Incorrect taskId'));
  }

  if (!await taskDal.findOneById(taskId)) {
    return res.status(400).json(fieldError('taskId', 'Unknown taskId'));
  }

  const userId: string = req.body?.userId?.trim();
  if (!userId) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }
  
  const title: string = req.body?.title?.trim();
  if (!title) {
    return res.status(400).json(fieldError('title', 'Incorrect title'));
  }

  const description: string = req.body?.description?.trim();
  if (!description) {
    return res.status(400).json(fieldError('description', 'Incorrect description'));
  }
  
  if (!await userDal.findOneById(userId)) {
    return res.status(400).json(fieldError('userId', 'Incorrect userId'));
  }

  const id = await taskDal.updateOneById(taskId, { userId, title, description });

  return res.json(resultSuccess({ id: id as string}));
};

export const getById = async (req: Request, res: Response) => {
  const taskId: string = req.params?.taskId?.trim();
  if (!taskId) {
    return res.status(400).json(queryParamError('taskId', 'Incorrect taskId'));
  }
  
  if (!await taskDal.findOneById(taskId)) {
    return res.status(400).json(queryParamError('taskId', 'Unknown taskId'));
  }

  return res.json(await taskDal.findOneById(taskId));
};

export const list = async (req: Request, res: Response) => {
  const sorting: string = req.query?.sorting?.trim();
  const page: number = Number(req.query?.page?.trim());
  
  return res.json(await taskDal.list(
    sorting !== 'asc',
    isNaN(page) ? 0 : page,
  ));
};

export const remove = async (req: Request, res: Response) => {
  const taskId: string = req.params?.taskId?.trim();
  if (!taskId) {
    return res.status(400).json(queryParamError('taskId', 'Incorrect taskId'));
  }
  
  if (!await taskDal.findOneById(taskId)) {
    return res.status(400).json(queryParamError('taskId', 'Unknown taskId'));
  }

  const id = await taskDal.removeById(taskId);

  return res.json(resultSuccess({ id: id as string }));
};

