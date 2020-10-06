import { injectable, inject } from 'tsyringe';

import Notes from '../infra/typeorm/entities/Note';

import INotesRepository from '../repositories/INotesRepository';

@injectable()
class ListNotesService {
  constructor(
    @inject('NotesRepository')
    private notesRepository: INotesRepository,
  ) {}

  public async execute(user_id: string): Promise<Notes[]> {
    const notes = await this.notesRepository.findByUserId(user_id);

    return notes;
  }
}

export default ListNotesService;
