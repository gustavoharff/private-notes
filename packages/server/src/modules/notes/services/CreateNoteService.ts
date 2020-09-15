import { getRepository } from 'typeorm';

import Note from '@modules/notes/infra/typeorm/entities/Note';

interface Request {
  title: string;
  content: string;
  user: string;
}

class CreateNoteService {
  public async execute({ title, content, user }: Request): Promise<Note> {
    const notesRepository = getRepository(Note);

    const note = notesRepository.create({ title, content, user_id: user });

    await notesRepository.save(note);

    return note;
  }
}

export default CreateNoteService;
