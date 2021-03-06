import AppError from '@shared/errors/AppError';
import FakeNotesRepository from '../repositories/fakes/FakeNotesRepository';
import DeleteNoteService from './DeleteNoteService';

let fakeNotesRepository: FakeNotesRepository;
let deleteNoteService: DeleteNoteService;

describe('DeleteNote', () => {
  beforeEach(() => {
    fakeNotesRepository = new FakeNotesRepository();
    deleteNoteService = new DeleteNoteService(fakeNotesRepository);
  });

  it('should be able to delete a note', async () => {
    const note = await fakeNotesRepository.create({
      user_id: 'user-id',
      title: 'note-title',
      content: 'note-content',
    });

    await deleteNoteService.execute({
      note_id: note.id,
      user_id: note.user_id,
    });

    const notes = await fakeNotesRepository.findByUserId(note.user_id);

    expect(notes).toEqual([]);
  });

  it('should not be able to delete a note with a non-existing note_id', async () => {
    const note = await fakeNotesRepository.create({
      user_id: 'user-id',
      title: 'note-title',
      content: 'note-content',
    });

    await expect(
      deleteNoteService.execute({
        note_id: 'no-existing-id',
        user_id: note.user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to delete a note with a non-existing user_id', async () => {
    const note = await fakeNotesRepository.create({
      user_id: 'user-id',
      title: 'note-title',
      content: 'note-content',
    });

    await expect(
      deleteNoteService.execute({
        note_id: note.id,
        user_id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
