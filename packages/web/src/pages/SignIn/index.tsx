import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Log in</h1>

        <span>Email adress</span>
        <Input name="email" placeholder="you@example.com" />

        <span>Password</span>
        <Input
          name="password"
          type="password"
          placeholder="Enter you password"
        />

        <button type="submit">Log In</button>

        <span>
          Dont have an account?<Link to="/signup">Sign Up</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
