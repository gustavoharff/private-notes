import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

const Profile: React.FC = () => {
  function handleLogout(): void {
    console.log('Logout');
  }

  return (
    <>
      <Header />
      <Container>
        <Link to="/" onClick={handleLogout}>
          Sair do aplicativo
        </Link>
      </Container>
    </>
  );
};

export default Profile;
