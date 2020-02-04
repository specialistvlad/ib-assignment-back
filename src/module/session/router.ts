import { Router } from 'express';

import { defaultRouterOptions, define404 } from '../../core/router';
import { create as createSession } from './controller';

export const router = Router(defaultRouterOptions);

/**
 * @api {post} /api/v1/session Create session aka signin
 * @apiName CreateSession
 * @apiGroup Sesion
 *
 * @apiParam {String} email User email.
 * @apiParam {String} password User password.
 *
 * @apiExample {curl} Example usage:
 * curl --header "Content-Type: application/json" --data '{"email":"xyz@test.com","password":"xyz2"}' -i http://localhost:3001/api/v1/session/
 * 
 * @apiSuccess {string} token jwt token.
 */
router.post('/', createSession);

define404(router);
