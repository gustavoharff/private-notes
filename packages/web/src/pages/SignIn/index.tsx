import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';

import Input from '../../components/Input';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from '../../components/Header';
import Button from '../../components/Button';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid email address'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Authentication failure');
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Header />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <span>E-mail address</span>
        <Input name="email" placeholder="you@example.com" />

        <span>Password</span>
        <Input
          name="password"
          type="password"
          placeholder="Enter you password"
        />

        <Button type="submit">Log in</Button>

        <span>
          Forgot your password?<Link to="/forgot">Recover password</Link>
        </span>

        <span>
          Dont have an account?<Link to="/signup">Sign up</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
