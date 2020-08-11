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
          .post('http://localhost:3333/signin', {
            code,
          })
          .then((response) => {
            const { token } = response.data;
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            if (
              axios.defaults.headers.common.Authorization === 'Bearer undefined'
            ) {
              history.push('/');
            } else {
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
