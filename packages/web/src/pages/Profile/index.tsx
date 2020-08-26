import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container } from './styles';

const Profile: React.FC = () => {
  const history = useHistory();

  function handleLogout(): void {
    history.push('/');
  }

  function handleExit(): void {
    window.close();
  }

  return (
    <>
      <Header />
      <Container>
        <Button
          type="button"
          onClick={handleLogout}
          title="Logout"
          color="#f94144"
        />
        <Button
          type="button"
          onClick={handleExit}
          title="Exit the application"
          color="#f94144"
        />
      </Container>
    </>
  );
};

export default Profile;
