import React, { useCallback, useRef } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Input from '../../components/Input';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import Header from '../../components/Header';
import Button from '../../components/Button';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

interface Params {
  token: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { token } = useParams<Params>();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string()
            .required('Password required')
            .min(6, 'At least 6 digits'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Passwords must match',
          ),
        });

        await schema.validate(data, { abortEarly: false });

        const { password, password_confirmation } = data;

        if (!token) {
          toast.error('Token invalid');
          return;
        }

        await api.post('password/reset', {
          password,
          password_confirmation,
          token,
        });

        toast.success('Your password has been changed');

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Error resetting password');
      }
    },
    [token, history],
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Reset your password</h1>

        <span>Password</span>
        <Input name="password" type="password" placeholder="New password" />

        <span>Password confirmation</span>
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirm your password"
        />

        <Button type="submit">Change password</Button>

        <span>
          <Link to="/">Go back</Link>
        </span>
      </Form>
    </Container>
  );
};

export default ResetPassword;
