import React from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

import Logo from '../../assets/logo-with-name.svg';

import { Container, Content, Profile } from './styles';

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>

      <Content>
        <Profile signed={toString(!!user)} to="/profile">
          {user && (
            <>
              <div>
                <strong>{user.name}</strong>
                <p>{user.email}</p>
              </div>
              <img
                src={
                  user.avatar !== null
                    ? user.avatar
                    : 'https://api.adorable.io/avatars/50/profile.png'
                }
                alt="Avatar"
              />
            </>
          )}
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
