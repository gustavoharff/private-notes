import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/icon.png';
import { Container, Logo, Credentials } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignIn(e: FormEvent): void {
    e.preventDefault();
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="My Note App" />
        <h2>Private Notes</h2>
      </Logo>
      <Credentials onSubmit={handleSignIn}>
        <h2>Register to the app</h2>
        <Input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Your name here"
        />
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
        <Button title="Register" color="#90be6d" type="submit" />
        <Link to="/">I have an account</Link>
      </Credentials>
    </Container>
  );
};

export default SignUp;
