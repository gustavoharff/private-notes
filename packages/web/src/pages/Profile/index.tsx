import React from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

const Profile: React.FC = () => (
  <>
    <Header />
    <Container>
      <Link to="/">Sair do aplicativo</Link>
    </Container>
  </>
);

export default Profile;
