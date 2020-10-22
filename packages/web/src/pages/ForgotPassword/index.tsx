import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid email address'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('password/forgot', {
          email: data.email,
        });

        toast.success('Password recovery email sent');

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Error sending recovery email');
      }
    },
    [history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Password recovery</h1>

        <span>Email adress</span>
        <Input name="email" placeholder="Your e-mail" />

        <Button type="submit">Recover</Button>

        <span>
          <Link to="/">Go back</Link>
        </span>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
