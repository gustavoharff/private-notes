import React, { useCallback } from 'react';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Header />
      <Container>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </Container>
    </>
  );
};
export default Profile;
