import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  function handleLogout(): void {
    window.close();
  }

  return (
    <Container>
      <button type="button" onClick={handleLogout}>
        Exit the application
      </button>
    </Container>
  );
};

export default Profile;
