import { getRepository, Repository } from 'typeorm';

import INotesRepository from '@modules/notes/repositories/INotesRepository';
import ICreateNoteDTO from '@modules/notes/dtos/ICreateNoteDTO';

import AppError from '@shared/errors/AppError';
import IDeleteNoteDTO from '@modules/notes/dtos/IDeleteNoteDTO';
import IEditNoteDTO from '@modules/notes/dtos/IEditNoteDTO';
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

  public async update({
    note_id,
    user_id,
    title,
    content,
  }: IEditNoteDTO): Promise<Note | undefined> {
    const note = await this.ormRepository.findOne({
      where: { id: note_id },
    });

    if (!note) {
      throw new AppError('Note not found');
    }

    await this.ormRepository.update(
      {
        id: note_id,
      },
      {
        id: note_id,
        user_id,
        title,
        content,
      },
    );

    const updatedNote = await this.ormRepository.findOne({
      where: { id: note_id },
    });

    return updatedNote;
  }

  public async delete({ note_id, user_id }: IDeleteNoteDTO): Promise<void> {
    const noteOwner = await this.ormRepository.findOne({
      where: {
        id: note_id,
        user_id,
      },
    });

    if (!noteOwner) {
      throw new AppError('You are not the owner of this note');
    }

    await this.ormRepository.delete(note_id);
  }

  public async findByUserId(user_id: string): Promise<Note[]> {
    const notes = await this.ormRepository.find({ where: { user_id } });

    return notes;
  }
}

export default NotesRepository;
