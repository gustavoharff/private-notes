import FakeNotesRepository from '../repositories/fakes/FakeNotesRepository';
import ListNotesService from './ListNotesService';

describe('ListUserNotes', () => {
  it('should be able to list the user notes', async () => {
    const fakeNotesRepository = new FakeNotesRepository();
    const listNotes = new ListNotesService(fakeNotesRepository);

    const note = await fakeNotesRepository.create({
      title: 'note-title',
      content: 'note-content',
      user_id: 'user-id',
    });

    await fakeNotesRepository.create({
      title: 'note-title',
      content: 'note-content',
      user_id: 'diferent-user-id',
    });

    const notes = await listNotes.execute('user-id');

    expect(notes).toEqual([
      {
        id: note.id,
        title: 'note-title',
        content: 'note-content',
        user_id: 'user-id',
      },
    ]);
  });
});
