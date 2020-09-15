import { getRepository } from 'typeorm';

import Note from '@modules/notes/infra/typeorm/entities/Note';

class DeleteNoteService {
  public async execute(id: string): Promise<void> {
    const notesRepository = getRepository(Note);

    await notesRepository.delete(id);
  }
}

export default DeleteNoteService;
