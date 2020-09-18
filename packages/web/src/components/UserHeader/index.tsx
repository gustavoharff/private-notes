import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Logo from '../../assets/logo-with-name.svg';

import { Container, Profile } from './styles';

const UserHeader: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container user={!!user}>
      <Link to="/dashboard">
        <Logo />
      </Link>
      {user && (
        <div>
          <Profile $signed={!!user} to="/profile">
            <div>
              <strong>{user.name}</strong>
              <p>{user.email}</p>
            </div>
            <img
              src={
                user.avatar !== null
                  ? `http://localhost:3333/files/${user.avatar}`
                  : 'https://api.adorable.io/avatars/50/profile.png'
              }
              alt="Avatar"
            />
          </Profile>
        </div>
      )}
    </Container>
  );
};

export default UserHeader;
