import Note from '../infra/typeorm/entities/Note';

import ICreateNoteDTO from '../dtos/ICreateNoteDTO';

export default interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<Note>;
  delete(id: string): Promise<void>;
  findByUserId(user_id: string): Promise<Note[]>;
}
