import express, { Router, Request, Response } from 'express';

import { defaultRouterOptions, define404 } from './module/base/router';
import { router as userRouter } from './module/user';
// import { router as sessionRouter } from './module/session';
// import { router as taskRouter } from './module/task';

export const router = Router(defaultRouterOptions);

router.use('/user/', userRouter);
// router.post('/session/', session);
// router.post('/task/', task);

define404(router);
