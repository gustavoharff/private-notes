import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Input';

import { Container } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post('/users', data);

      history.push('/');
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

        <button type="submit">Sign Up</button>

        <span>
          Already have an account?<Link to="/">Log In</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignUp;
