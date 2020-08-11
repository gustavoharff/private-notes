import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { AiFillGithub } from 'react-icons/ai';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.href.includes('code')) {
      const [, preCode] = window.location.href.split('=');
      const [code] = preCode.split('#');

      axios
        .post('https://my-note-app-server.herokuapp.com/signin', { code })
        .then((response) => {
          axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          history.push('/dashboard');
        })
        .catch();
    }
  }, []);

  return (
    <Container>
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.3901bbbc44d6de8f">
        <p>Login with GitHub</p>
        <AiFillGithub size={20} />
      </a>
    </Container>
  );
};

export default SignIn;
