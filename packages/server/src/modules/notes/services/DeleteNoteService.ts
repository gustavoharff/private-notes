import { injectable, inject } from 'tsyringe';

import INotesRepository from '../repositories/INotesRepository';

@injectable()
class DeleteNoteService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    await this.notesRepository.delete(id);
  }
}

export default DeleteNoteService;
