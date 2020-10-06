import { injectable, inject } from 'tsyringe';

import Note from '@modules/notes/infra/typeorm/entities/Note';
import INotesRepository from '../repositories/INotesRepository';

interface IRequest {
  title: string;
  content: string;
  user_id: string;
}

@injectable()
class CreateNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  public async execute({ title, content, user_id }: IRequest): Promise<Note> {
    const note = await this.notesRepository.create({ title, content, user_id });

    return note;
  }
}

export default CreateNoteService;
