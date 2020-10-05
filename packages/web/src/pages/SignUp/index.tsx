import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { FormHandles } from '@unform/core';
import api from '../../services/api';

import Input from '../../components/Input';

import { Container } from './styles';
import AuthHeader from '../../components/AuthHeader';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

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

        toast.success('Account was created');

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Account could not be created');
      }
    },
    [history],
  );

  return (
    <Container>
      <AuthHeader />
      <Form ref={formRef} onSubmit={handleSubmit}>
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
