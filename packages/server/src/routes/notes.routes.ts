import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateNoteService from '../services/CreateNoteService';

const notesRouter = Router();

notesRouter.use(ensureAuthenticated);

notesRouter.post('/', async (request, response) => {
  const { title, content } = request.body;

  const createNote = new CreateNoteService();

  const note = await createNote.execute({
    content,
    title,
    user: request.user.id,
  });

  return response.json(note);
});

export default notesRouter;
