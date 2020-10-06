import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import INotesRepository from '../repositories/INotesRepository';

interface IRequest {
  note_id: string;
  user_id: string;
}

@injectable()
class DeleteNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  public async execute({ note_id, user_id }: IRequest): Promise<void> {
    const notes = await this.notesRepository.findByUserId(user_id);

    const noteExists = notes.find(note => note.id === note_id);

    if (!noteExists) {
      throw new AppError('Note dont exists');
    }

    await this.notesRepository.delete({ note_id, user_id });
  }
}

export default DeleteNoteService;
