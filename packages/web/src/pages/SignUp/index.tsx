import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import Input from '../../components/Input';

import { Container } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign up</h1>

        <span>Full name</span>
        <Input name="name" placeholder="Enter you name" />

        <span>Email adress</span>
        <Input name="email" placeholder="you@example.com" />

        <span>Create password</span>
        <Input
          name="password"
          type="password"
          placeholder="Enter you password"
        />

        <button type="submit">Log In</button>

        <span>
          Already have an account?<Link to="/">Log In</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignUp;
