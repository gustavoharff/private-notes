import React, { useState, FormEvent } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/icon.png';
import { Container } from './styles';

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
      <img src={logo} alt="My Note App" />
      <h2>My Note App</h2>
      <form onSubmit={handleSignIn}>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          placeholder="Your e-mail here"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Your password here"
        />
        <Button title="Login" color="#90be6d" type="submit" />
        <Link to="/signup">Create account</Link>
      </form>
    </Container>
  );
};

export default SignIn;
