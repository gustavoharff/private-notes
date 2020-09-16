import React, { useState, useEffect, useCallback } from 'react';

import { AnimateSharedLayout } from 'framer-motion';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import Note from '../../components/Note';

import Create from '../../components/Create';

import { Container, Notes } from './styles';

interface NoteProps {
  id: string;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
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
      <AnimateSharedLayout>
        <Create notes={notes} setNotes={setNotes} />

        <Notes layout>
          {notes.map((note) => (
            <Note key={note.id} note={note} deleteNote={handleDeleteNote} />
          ))}
        </Notes>
      </AnimateSharedLayout>
    </Container>
  );
};

export default Dashboard;
