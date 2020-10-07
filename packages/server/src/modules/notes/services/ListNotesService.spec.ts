import FakeNotesRepository from '../repositories/fakes/FakeNotesRepository';
import ListNotesService from './ListNotesService';

let fakeNotesRepository: FakeNotesRepository;
let listNotes: ListNotesService;

describe('ListUserNotes', () => {
  beforeEach(() => {
    fakeNotesRepository = new FakeNotesRepository();
    listNotes = new ListNotesService(fakeNotesRepository);
  });

  it('should be able to list the user notes', async () => {
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
