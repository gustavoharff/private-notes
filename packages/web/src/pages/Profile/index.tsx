import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Profile: React.FC = () => {
  function handleLogout(): void {
    window.close();
  }

  return (
    <>
      <Header />
      <Container>
        <button type="button" onClick={handleLogout}>
          Sair do aplicativo
        </button>
      </Container>
    </>
  );
};

export default Profile;
