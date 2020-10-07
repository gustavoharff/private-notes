import FakeNotesRepository from '../repositories/fakes/FakeNotesRepository';
import CreateNoteService from './CreateNoteService';

let fakeNotesRepository: FakeNotesRepository;
let createNote: CreateNoteService;

describe('CreateNote', () => {
  beforeEach(() => {
    fakeNotesRepository = new FakeNotesRepository();
    createNote = new CreateNoteService(fakeNotesRepository);
  });

  it('should be able to create a new note', async () => {
    const note = await createNote.execute({
      title: 'Note title',
      content: 'Note content',
      user_id: 'user-id',
    });

    expect(note).toHaveProperty('id');
    expect(note).toHaveProperty('title');
    expect(note).toHaveProperty('content');
    expect(note).toHaveProperty('user_id');
    expect(note.title).toBe('Note title');
    expect(note.content).toBe('Note content');
    expect(note.user_id).toBe('user-id');
  });
});
