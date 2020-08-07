import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();
  const [, preCode] = window.location.href.split('=');
  const [code] = preCode.split('#');

  useEffect(() => {
    axios
      .post('https://github.com/login/oauth/access_token', {
        client_id: '',
        client_secret: '',
        code,
        redirect_uri: 'http://localhost:4000/dashboard',
      })
      .then((response) => {
        const [preToken] = response.data.split('&');
        const [access, token] = preToken.split('=');

        if (access === 'access_token') {
          axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          history.push('/dashboard');
        }
      })
      .catch();
  }, []);

  return (
    <div>
      <a href="https://github.com/login/oauth/authorize?scope=user:email&client_id=8df98a9dba4aaa767ae5">
        Teste
      </a>
    </div>
  );
};

export default SignIn;
