import React, { useState, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/icon.png';
import { Container, Logo, Credentials } from './styles';

const SignIn: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(e: FormEvent): any {
    e.preventDefault();
    if (email === 'admin' && password === 'admin') {
      history.push('/dashboard');
    } else {
      alert('Login failed, check your credentials!');
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="My Note App" />
        <h2>Private Notes</h2>
      </Logo>
      <Credentials onSubmit={handleSignIn}>
        <h2>Log in to the app</h2>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="E-mail"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <Button title="Login" color="#90be6d" type="submit" />
        <Link to="/signup">Create account</Link>
      </Credentials>
    </Container>
  );
};

export default SignIn;
