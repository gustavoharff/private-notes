import React from 'react';

import { Container } from './styles';
import Button from '../../components/Button';

const Profile: React.FC = () => {
  function handleLogout(): void {
    window.close();
  }

  return (
    <Container>
      <Button
        onClick={handleLogout}
        title="Exit the application"
        color="#f94144"
      />
    </Container>
  );
};

export default Profile;
