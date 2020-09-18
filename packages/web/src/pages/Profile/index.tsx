import React, { useCallback } from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import UserHeader from '../../components/UserHeader';

const Profile: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <UserHeader />
      <Container layout>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
          type="button"
          onClick={handleLogout}
        >
          Logout
        </motion.button>
      </Container>
    </>
  );
};
export default Profile;
