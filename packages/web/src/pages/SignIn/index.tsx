import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    try {
      const [, preCode] = window.location.href.split('=');
      const [code] = preCode.split('#');

      if (code) {
        axios
          .post('https://github.com/login/oauth/access_token', {
            client_id: 'Iv1.3901bbbc44d6de8f',
            client_secret: '4540f36898dcf8614100904375a68b0c560f5f42',
            code,
          })
          .then((response) => {
            const [preToken] = response.data.split('&');
            const [access, token] = preToken.split('=');
            if (access === 'access_token') {
              axios.defaults.headers.common.Authorization = `Bearer ${token}`;
              history.push('/dashboard');
            }
          });
      }
    } catch (err) {
      console.log(err);
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
