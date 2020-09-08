import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '../../components/Input';

import { Container } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Name required'),
        email: Yup.string()
          .required('E-mail required')
          .email('Enter a valid email address'),
        password: Yup.string()
          .required('Password required')
          .min(6, 'At least 6 digits'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
