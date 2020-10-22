import React, { useState, useEffect, useCallback } from 'react';

import { AnimateSharedLayout } from 'framer-motion';

import api from '../../services/api';

import { useAuth } from '../../hooks/auth';

import Note from '../../components/Note';

import Create from '../../components/Create';

import { Container, Notes } from './styles';
import Header from '../../components/Header';

interface NoteProps {
  id: string;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const { signOut, updateUser } = useAuth();

  const handleDeleteNote = useCallback(async (id: string) => {
    await api.delete(`notes/${id}`);

    const response = await api.get('notes');

    setNotes(response.data);
  }, []);

  useEffect(() => {
    api
      .get('profile')
      .then((response) => updateUser(response.data))
      .catch(() => {
        signOut();
      });

    api.get('notes').then((response) => setNotes(response.data));
  }, [updateUser, signOut]);

  return (
    <>
      <Header />
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
    </>
  );
};

export default Dashboard;
