import React from 'react';

import ButtonLink from '../../components/ButtonLink';
import Header from '../../components/Header';

import { Container } from './styles';

const Lobby: React.FC = () => (
  <>
    <Header />
    <Container>
      <ButtonLink to="/notes/1" title="First note" color="#f9c74f" />
      <ButtonLink to="/notes/2" title="Second note" color="#f9c74f" />
    </Container>
  </>
);

export default Lobby;
