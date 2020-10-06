import { getRepository, Repository } from 'typeorm';

import INotesRepository from '@modules/notes/repositories/INotesRepository';
import ICreateNoteDTO from '@modules/notes/dtos/ICreateNoteDTO';

import Note from '../entities/Note';

class NotesRepository implements INotesRepository {
  private ormRepository: Repository<Note>;

  constructor() {
    this.ormRepository = getRepository(Note);
  }

  public async create({
    title,
    content,
    user_id,
  }: ICreateNoteDTO): Promise<Note> {
    const note = this.ormRepository.create({
      title,
      content,
      user_id,
    });

    await this.ormRepository.save(note);

    return note;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async findByUserId(user_id: string): Promise<Note[]> {
    const notes = await this.ormRepository.find({ where: { user_id } });

    return notes;
  }
}

export default NotesRepository;
