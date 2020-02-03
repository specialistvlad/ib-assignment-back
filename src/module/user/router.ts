import { Router } from 'express';

import { defaultRouterOptions, define404 } from '../base/router';
import { create as createUser } from './controller';

export const router = Router(defaultRouterOptions);

router.post('/', createUser);

define404(router);

