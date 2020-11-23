import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import { FiArrowLeft, FiCamera, FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { AnimateSharedLayout } from 'framer-motion';
import { Container, AvatarInput } from './styles';

import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import api from '../../services/api';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signOut, user, updateUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    api
      .get('profile')
      .then((response) => updateUser(response.data))
      .catch(() => {
        signOut();
      });
  }, [signOut, updateUser]);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid email address'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().required('Required field'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Required field'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Incorrect confirmation'),
        });

        await schema.validate(data, { abortEarly: false });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/dashboard');

        toast.success('Your profile has been updated!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        toast.error('Profile update error!');
      }
    },
    [history, updateUser],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        const response = await api.patch('/users/avatar', data);

        updateUser(response.data);

        toast.success('Your profile photo has been updated');
      }
    },
    [updateUser],
  );

  return (
    <AnimateSharedLayout>
      <Container
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header>
          <div>
            <Link to="/dashboard">
              <FiArrowLeft />
            </Link>
            <button type="button" onClick={signOut}>
              <FiPower />
            </button>
          </div>
        </header>

        <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>
          <AvatarInput>
            <img
              src={
                user.avatar_url
                  ? user.avatar_url
                  : 'https://api.adorable.io/avatars/186/profile.png'
              }
              alt={user.name}
            />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <span>Name</span>
          <Input name="name" placeholder="Your name" />

          <span>Email address</span>
          <Input
            containerStyle={{ marginBottom: 24 }}
            name="email"
            placeholder="Your email"
          />

          <span>Current password</span>
          <Input
            name="old_password"
            type="password"
            placeholder="Your password"
          />

          <span>New password</span>
          <Input name="password" type="password" placeholder="Password" />

          <span>Confirm password</span>
          <Input
            name="password_confirmation"
            type="password"
            placeholder="Confirm password"
          />

          <Button type="submit">Confirm changes</Button>
        </Form>
      </Container>
    </AnimateSharedLayout>
  );
};
export default Profile;
