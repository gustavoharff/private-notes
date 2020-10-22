import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';

import icon from '../../assets/icon.png';

import { Container, UserContainer, Profile } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <UserContainer>
        <Link to="/dashboard">
          <img src={logo} alt="Private Notes" />
        </Link>
        {user && (
          <div>
            <Profile to="/profile">
              <div>
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </div>
              <img
                src={
                  user.avatar_url
                    ? user.avatar_url
                    : 'https://api.adorable.io/avatars/50/profile.png'
                }
                alt="Avatar"
              />
            </Profile>
          </div>
        )}
      </UserContainer>
    );
  }

  return (
    <Container>
      <img src={icon} alt="Private Notes" />
      <div>
        <strong>Welcome to Private Notes</strong>
        <span>Sign in to save your content to the cloud.</span>
      </div>
    </Container>
  );
};

export default Header;
