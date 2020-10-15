import React, { useCallback } from 'react';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Header />
      <Container layout>
        <Button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
          type="button"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>
    </>
  );
};
export default Profile;
