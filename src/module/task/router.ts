import { Router } from 'express';

import { defaultRouterOptions, define404 } from '../../core/router';
import { create as createTask } from './controller';

export const router = Router(defaultRouterOptions);

/**
 * @api {post} /api/v1/task Create task
 * @apiName CreateTask
 * @apiGroup Task
 *
 * @apiParam {Number} userId User id.
 * @apiParam {String} title Title of task.
 * @apiParam {String} description Description of task.
 *
 * @apiSuccess {Number} id Task unique ID.
 */
router.post('/', createTask);

define404(router);

