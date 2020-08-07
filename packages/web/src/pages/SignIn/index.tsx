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
        try {
          axios
            .post('https://github.com/login/oauth/access_token', {
              client_id: '8df98a9dba4aaa767ae5',
              client_secret: '526c989f0fb69b065fcfd8118baefc42fe24afb2',
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
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8df98a9dba4aaa767ae5">
        <p>Login with GitHub</p>
        <AiFillGithub size={20} />
      </a>
    </Container>
  );
};

export default SignIn;
