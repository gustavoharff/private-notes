import Note from '../infra/typeorm/entities/Note';

import ICreateNoteDTO from '../dtos/ICreateNoteDTO';
import IDeleteNoteDTO from '../dtos/IDeleteNoteDTO';

export default interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<Note>;
  delete(data: IDeleteNoteDTO): Promise<void>;
  findByUserId(user_id: string): Promise<Note[]>;
}
