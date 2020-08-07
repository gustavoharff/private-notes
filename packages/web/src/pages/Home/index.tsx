import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [user, setUser] = useState({});
  try {
    const [, preCode] = window.location.href.split('=');
    const [code] = preCode.split('#');

    useEffect(() => {
      axios
        .post('https://github.com/login/oauth/access_token', {
          client_id: process.env.CLIENT_ID,
          client_secret: '',
          code,
          redirect_uri: 'http://localhost:4000',
        })
        .then((response) => {
          const [preToken] = response.data.split('&');
          const [access, token] = preToken.split('=');

          if (access === 'access_token') {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          }

          axios
            .get('https://api.github.com/user')
            .then((res) => setUser(res.data));
        });
    }, []);
  } catch (err) {
    console.log(err);
  }

  return (
    <Container>
      <div>
        <h1>Welcome {user.name}</h1>
        <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8df98a9dba4aaa767ae5">
          Logar com github
        </a>
      </div>

      <div>
        <h3>This application does not save content in the cloud!</h3>
        <Content>
          <Link to="/notes">
            <h2>Go to notes</h2>
          </Link>
        </Content>
      </div>
    </Container>
  );
};

export default Home;
