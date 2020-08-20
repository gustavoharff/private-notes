import React from 'react';

import Button from '../../components/Button';

import { Container } from './styles';

const Lobby: React.FC = () => (
  <Container>
    <Button to="/notes/1" title="First note" color="#f9c74f" />
    <Button to="/notes/2" title="Second note" color="#f9c74f" />
  </Container>
);

export default Lobby;
