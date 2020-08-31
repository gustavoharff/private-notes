import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink';

import logo from '../../assets/icon.png';

import { Container } from './styles';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState(() => {
    const storagedLenght = localStorage.getItem('@Notes:lenght');

    if (storagedLenght) {
      return JSON.parse(storagedLenght);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@Notes:lenght', JSON.stringify(notes));
  }, [notes]);

  function handleAddNote(): void {
    setNotes([...notes, notes.length + 1]);
  }

  function handleRemoveNotes(): void {
    notes.pop();
    setNotes([...notes]);
  }

  return (
    <>
      <Header />
      <Container>
        {notes.length < 1 && (
          <>
            <img src={logo} alt="My Note App" />
            <h1>Welcome to My Note App</h1>

            <strong>
              This application does not save content in the cloud!
            </strong>
          </>
        )}

        {notes &&
          notes.map((note) => (
            <ButtonLink
              key={note}
              to={`/notes/${note}`}
              title={`Note: ${note}`}
              color="#f9c74f"
            />
          ))}

        <Button
          title="Adicionar"
          color="#90be6d"
          type="button"
          onClick={handleAddNote}
        />

        <Button
          title="Remover"
          color="#f94144"
          type="button"
          onClick={handleRemoveNotes}
        />
      </Container>
    </>
  );
};
export default Dashboard;
