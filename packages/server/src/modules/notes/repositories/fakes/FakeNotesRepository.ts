import { v4 } from 'uuid';

import INotesRepository from '@modules/notes/repositories/INotesRepository';
import ICreateNoteDTO from '@modules/notes/dtos/ICreateNoteDTO';

import Note from '../../infra/typeorm/entities/Note';

class FakeNotesRepository implements INotesRepository {
  private notes: Note[] = [];

  public async create({
    title,
    content,
    user_id,
  }: ICreateNoteDTO): Promise<Note> {
    const note = new Note();

    Object.assign(note, {
      id: v4(),
      title,
      content,
      user_id,
    });

    this.notes.push(note);

    return note;
  }

  public async delete(id: string): Promise<void> {
    const index = this.notes.findIndex(note => note.id === id);

    this.notes.splice(index, 1);
  }

  public async findByUserId(user_id: string): Promise<Note[]> {
    const notes = this.notes.filter(note => note.user_id === user_id);

    return notes;
  }
}

export default FakeNotesRepository;
