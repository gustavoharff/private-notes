import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { useAuth } from '../../hooks/AuthContext';

import { Container, Note } from './styles';

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState([]);

  const { token } = useAuth();

  async function handleAddNote() {
    const response = await api.post(
      'notes',
      {
        title: 'teste',
        content: 'testeee',
      },
      {
        headers: {
          Authorization: `Beader ${token}`,
        },
      },
    );

    setNotes([...notes, response.data]);
  }

  useEffect(() => {
    api
      .get('notes', {
        headers: {
          Authorization: `Beader ${token}`,
        },
      })
      .then((response) => setNotes(response.data));
  }, []);

  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id}>
          <header>
            <strong>{note.title}</strong>
          </header>
          <footer>Remove</footer>
        </Note>
      ))}

      <button type="button" onClick={handleAddNote}>
        {' '}
        Adicionar nota
      </button>
    </Container>
  );
};

export default Dashboard;
