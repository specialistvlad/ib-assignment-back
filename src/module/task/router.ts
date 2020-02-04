import { Router } from 'express';

import { defaultRouterOptions, define404 } from '../../core/router';
import { jwtAuthentication } from '../session/controller';
import {
  create as createTask,
  getById as getTaskById,
  updateById as updateTaskById,
  remove as removeTask,
  list,
} from './controller';

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
router.post('/', jwtAuthentication(), createTask);

/**
 * @api {get} /api/v1/task/:taskId Get task
 * @apiName GetTask
 * @apiGroup Task
 *
 * @apiParam {Number} taskId Task id.
 * @apiExample {curl} Example usage:
 *  curl -H "Content-Type: application/json" -H "Authorization: Bearer <jwt token>" -i http://localhost:3001/api/v1/task/0
 * @apiSuccess {Number} id Task unique ID.
 */
router.get('/:taskId', jwtAuthentication(), getTaskById);

/**
 * @api {list} /api/v1/task/ List tasks
 * @apiName ListTask
 * @apiGroup Task
 * @apiDescription Show sorted list of all tasks
 *
 * @apiExample {curl} Example usage:
 *  curl -H "Content-Type: application/json" -H "Authorization: Bearer <jwt token>" -i http://localhost:3001/api/v1/task/?sorting=desc&page=0
 * @apiParam (queryParams) {String="asc","desc"} sorting Set sorting direction
 * @apiParam (queryParams) {Number} page Set page
 *
 */
router.get('/', jwtAuthentication(), list);

/**
 * @api {PUT} /api/v1/task/:taskId Update task
 * @apiName UpdateTask
 * @apiGroup Task
 *
 * @apiParam {Number} userId User id.
 * @apiParam {String} title Title of task.
 * @apiParam {String} description Description of task.
 *
 * @apiSuccess {Number} id Task unique ID.
 * @apiExample {curl} Example usage:
 *  curl -H "Content-Type: application/json" -H "Authorization: Bearer <jwt token>" -X PUT --data '{"userId":"0","title":"title", "description": "new description"}' -i http://localhost:3001/api/v1/task/0
 */
router.put('/:taskId', jwtAuthentication(), updateTaskById);

/**
 * @api {delete} /api/v1/task/:taskId Remove task
 * @apiName RemoveTask
 * @apiGroup Task
 *
 * @apiExample {curl} Example usage:
 *   curl -H "Content-Type: application/json" -H "Authorization: Bearer <jwt token>" -X DELETE -i http://localhost:3001/api/v1/task/0
 * @apiParam {Number} taskId Task id.
 *
 * @apiSuccess {Number} id Task unique ID.
 */
router.delete('/:taskId', jwtAuthentication(), removeTask);

define404(router);

