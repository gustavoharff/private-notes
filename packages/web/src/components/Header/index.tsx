import React, { useState, useEffect } from 'react';
import axios from 'axios';

import logo from '../../assets/icon.png';

import { Container, Content, Logo, Profile } from './styles';

const Header: React.FC = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get('https://api.github.com/user').then((res) => {
      setUser(res.data);
    });
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="" />
          <h3>My Note App</h3>
        </Logo>
        <Profile>
          <div>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar_url} alt="" />
        </Profile>
      </Content>
    </Container>
  );
};

export default Header;
