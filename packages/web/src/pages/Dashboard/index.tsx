import React, { useState, useEffect, useCallback } from 'react';
import { FiTrash } from 'react-icons/fi';

import api from '../../services/api';

import { useAuth } from '../../hooks/AuthContext';

import { Container, Note } from './styles';

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
      {notes.map((note) => (
        <Note key={note.id}>
          <header>
            <strong>{note.title}</strong>
          </header>
          <button type="button" onClick={() => handleDeleteNote(note.id)}>
            <FiTrash />
            Remove
          </button>
        </Note>
      ))}

      <main>
        <header>
          <input
            placeholder="Type the title"
            value={newNoteTitle}
            onChange={handleInputChange}
          />
        </header>
        <button type="button" onClick={handleAddNote}>
          Add
        </button>
      </main>
    </Container>
  );
};

export default Dashboard;
