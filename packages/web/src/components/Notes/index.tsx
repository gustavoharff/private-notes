import React, { useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { NotesContainer } from './styles';
import { useNotes } from '../../hooks/notes';
import Note from '../Note';

const Notes: React.FC = () => {
  const { signOut, updateUser } = useAuth();

  const { notes, setNotes } = useNotes();

  useEffect(() => {
    api
      .get('profile')
      .then((response) => updateUser(response.data))
      .catch(() => {
        signOut();
      });

    api.get('notes').then((response) => setNotes(response.data));
  }, [updateUser, signOut, setNotes]);

  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note note={note} />
      ))}
    </NotesContainer>
  );
};

export default Notes;
