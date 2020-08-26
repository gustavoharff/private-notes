import React from 'react';

import Button from '../../components/Button';
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
        <Button
          type="button"
          onClick={handleLogout}
          title="Exit the application"
          color="#f94144"
        />
      </Container>
    </>
  );
};

export default Profile;
