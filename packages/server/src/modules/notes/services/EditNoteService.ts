import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Note from '../infra/typeorm/entities/Note';

import INotesRepository from '../repositories/INotesRepository';

interface IRequest {
  note_id: string;
  user_id: string;
  title: string;
  content: string;
}

@injectable()
class DeleteNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  public async execute({
    note_id,
    user_id,
    title,
    content,
  }: IRequest): Promise<Note | undefined> {
    const notes = await this.notesRepository.findByUserId(user_id);

    const noteExists = notes.find(note => note.id === note_id);

    if (!noteExists) {
      throw new AppError('Note dont exists');
    }

    const note = await this.notesRepository.update({
      user_id,
      note_id,
      title,
      content,
    });

    return note;
  }
}

export default DeleteNoteService;
