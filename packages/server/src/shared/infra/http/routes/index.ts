import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

import notesRouter from '@modules/notes/infra/http/routes/notes.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/profile', profileRouter);

routes.use('/sessions', sessionsRouter);

routes.use('/password', passwordRouter);

routes.use('/notes', notesRouter);

export default routes;
