import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Lobby: React.FC = () => (
  <Container>
    <Link to="/notes/1">Note 1</Link>
    <Link to="/notes/2">Nota 2</Link>
  </Container>
);

export default Lobby;
