import express, { Request, Response } from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';

import { define404 } from './module/base/router';

import { router } from './router';

const PORT = 3001;

const app = express();

app.use('/static', express.static(join(__dirname, 'static')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/api/v1/', router);

app.use('*', function(req: Request, res: Response) {
  res.redirect('/static/apidoc/');
});

define404(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));