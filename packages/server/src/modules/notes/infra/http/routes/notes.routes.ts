import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import NotesController from '../controllers/NotesController';

const notesRouter = Router();
const notesController = new NotesController();

notesRouter.use(ensureAuthenticated);

notesRouter.get('/', notesController.index);

notesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
    },
  }),
  notesController.create,
);

notesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  notesController.delete,
);

export default notesRouter;
