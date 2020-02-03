import { Router } from 'express';

import { defaultRouterOptions, define404 } from '../../core/router';
import { create as createUser } from './controller';

export const router = Router(defaultRouterOptions);

/**
 * @api {post} /api/v1/user Create user aka signup
 * @apiName CreateUser
 * @apiGroup User
 *
 * @apiParam {String} email Users unique email.
 * @apiParam {String} password Users unique password.
 *
 * @apiSuccess {Number} id Users unique ID.
 */
router.post('/', createUser);

define404(router);

