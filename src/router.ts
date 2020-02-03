import express, { Router, Request, Response } from 'express';

import { defaultRouterOptions, define404 } from './core/router';
import { router as userRouter } from './module/user';
import { router as sessionRouter } from './module/session';
import { router as taskRouter } from './module/task';

export const router = Router(defaultRouterOptions);

router.use('/user/', userRouter);
router.use('/session/', sessionRouter);
router.use('/task/', taskRouter);

define404(router);
