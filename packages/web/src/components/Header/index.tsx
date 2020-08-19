import React from 'react';

import logo from '../../assets/icon.png';

import { Container, Content, Logo, Profile } from './styles'; // eslint-disable-line

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo to="/">
        <img src={logo} alt="My Note App" />
        <h3>My Note App</h3>
      </Logo>
      <Profile to="/profile">
        <div>
          <strong>Username</strong>
          <p>username@domain.com</p>
        </div>
        <img
          src="https://api.adorable.io/avatars/50/profile.png"
          alt="Avatar"
        />
      </Profile>
    </Content>
  </Container>
);

export default Header;
