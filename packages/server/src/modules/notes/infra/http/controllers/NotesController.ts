import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateNoteService from '@modules/notes/services/CreateNoteService';
import DeleteNoteService from '@modules/notes/services/DeleteNoteService';
import ListNotesService from '@modules/notes/services/ListNotesService';

class NotesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, content } = request.body;

    const createNote = container.resolve(CreateNoteService);

    const note = await createNote.execute({
      content,
      title,
      user_id: request.user.id,
    });

    return response.json(note);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;
    const deleteNote = container.resolve(DeleteNoteService);

    await deleteNote.execute({ note_id: id, user_id });

    return response.send();
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listNotes = container.resolve(ListNotesService);

    const notes = await listNotes.execute(user_id);

    return response.json(notes);
  }
}

export default NotesController;
