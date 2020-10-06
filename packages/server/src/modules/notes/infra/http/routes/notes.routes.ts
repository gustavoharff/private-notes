import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import NotesController from '../controllers/NotesController';

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.use(ensureAuthenticated);

notesRouter.get('/', notesController.index);

notesRouter.post('/', notesController.create);

notesRouter.delete('/:id', notesController.delete);

export default notesRouter;
