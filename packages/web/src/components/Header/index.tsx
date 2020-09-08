import React from 'react';

import Logo from '../../assets/logo-with-name.svg';

import { Container, Profile } from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo />

    <Profile to="/profile">
      <div>
        <strong>Username</strong>
        <p>username@domain.com</p>
      </div>
      <img src="https://api.adorable.io/avatars/50/profile.png" alt="Avatar" />
    </Profile>
  </Container>
);

export default Header;
