import React, { useState, useEffect, useCallback } from 'react';
import { FiTrash, FiPlus } from 'react-icons/fi';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import { Container, AddNote, Notes, Note } from './styles';

interface NoteProps {
  id: string;
  title: string;
}

const Dashboard: React.FC = () => {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const { token } = useAuth();

  const handleDeleteNote = useCallback(
    async (id: string) => {
      await api.delete(`notes/${id}`, {
        headers: {
          Authorization: `Beader ${token}`,
        },
      });

      const response = await api.get('notes', {
        headers: {
          Authorization: `Beader ${token}`,
        },
      });

      setNotes(response.data);
    },
    [token],
  );

  const handleAddNote = useCallback(async () => {
    const response = await api.post(
      'notes',
      {
        title: newNoteTitle !== '' ? newNoteTitle : 'Title not defined',
        content: '',
      },
      {
        headers: {
          Authorization: `Beader ${token}`,
        },
      },
    );

    setNewNoteTitle('');
    setNotes([...notes, response.data]);
  }, [notes, newNoteTitle, token]);

  const handleInputChange = useCallback((e) => {
    setNewNoteTitle(e.target.value);
  }, []);

  useEffect(() => {
    api
      .get('notes', {
        headers: {
          Authorization: `Beader ${token}`,
        },
      })
      .then((response) => setNotes(response.data));
  }, [token]);

  return (
    <Container>
      <AddNote>
        <form>
          <input
            placeholder="Type the title here"
            value={newNoteTitle}
            onChange={handleInputChange}
          />

          <button type="button" onClick={handleAddNote}>
            <FiPlus size={20} />
          </button>
        </form>
      </AddNote>

      <Notes>
        {notes.map((note) => (
          <Note key={note.id}>
            <div>
              <strong>{note.title}</strong>
            </div>
            <button type="button" onClick={() => handleDeleteNote(note.id)}>
              <FiTrash size={18} />
            </button>
          </Note>
        ))}
      </Notes>
    </Container>
  );
};

export default Dashboard;
