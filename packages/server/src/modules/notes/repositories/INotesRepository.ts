import Note from '../infra/typeorm/entities/Note';

import ICreateNoteDTO from '../dtos/ICreateNoteDTO';
import IDeleteNoteDTO from '../dtos/IDeleteNoteDTO';
import IEditNoteDTO from '../dtos/IEditNoteDTO';

export default interface INotesRepository {
  create(data: ICreateNoteDTO): Promise<Note>;
  update(data: IEditNoteDTO): Promise<Note | undefined>;
  delete(data: IDeleteNoteDTO): Promise<void>;
  findByUserId(user_id: string): Promise<Note[]>;
}
