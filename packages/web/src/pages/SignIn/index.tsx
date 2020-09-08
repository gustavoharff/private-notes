import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { AuthContext } from '../../hooks/AuthContext';

import Input from '../../components/Input';

import { Container } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { user, signIn } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid email address'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, { abortEarly: false });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.log(err);
      }
    },
    [signIn],
  );

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
