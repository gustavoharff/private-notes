import { Router } from 'express';
import { getRepository } from 'typeorm';

import Note from '../models/Note';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import CreateNoteService from '../services/CreateNoteService';
import DeleteNoteService from '../services/DeleteNoteService';

const notesRouter = Router();

notesRouter.use(ensureAuthenticated);

notesRouter.get('/', async (request, response) => {
  const notesRepository = getRepository(Note);

  const notes = await notesRepository.find({
    where: { user_id: request.user.id },
  });

  return response.json(notes);
});

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

notesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteNote = new DeleteNoteService();

  await deleteNote.execute(id);

  return response.send();
});

export default notesRouter;
