import React from 'react';

import logo from '../../assets/icon.png';

import { Container, Content, Logo, Profile } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo to="/dashboard">
        <img src={logo} alt="Private Notes" />
        <h3>Private Notes</h3>
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
