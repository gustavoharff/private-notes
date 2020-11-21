import React from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import Notes from '../../components/Notes';
import Create from '../../components/Create';
import Header from '../../components/Header';

import { Container } from './styles';
import { useNotes } from '../../hooks/notes';

const Dashboard: React.FC = () => {
  const { setNotes, notes } = useNotes();

  return (
    <>
      <Header />
      <Container>
        <AnimateSharedLayout>
          <Create notes={notes} setNotes={setNotes} />

          <Notes />
        </AnimateSharedLayout>
      </Container>
    </>
  );
};

export default Dashboard;
