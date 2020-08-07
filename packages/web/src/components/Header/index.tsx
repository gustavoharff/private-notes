import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/icon.png';

import {
 Container, Content, Logo, Profile
} from './styles';

interface User {
  name: string;
  email: string;
  avatar_url: string;
}

const Header: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get('https://api.github.com/user')
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => history.push('/'));
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
