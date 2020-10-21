import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, HeaderTitle, HeaderContent, InputName } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logo} />
    <HeaderTitle>Welcome to Private Notes</HeaderTitle>
    <HeaderContent>Sign in to save your content to the cloud.</HeaderContent>
    <InputName>Email address</InputName>
    <Input name="email" placeholder="you@example.com" />
    <InputName>Password</InputName>
    <Input name="password" placeholder="Enter you password" />

    <Button>Log in</Button>
  </Container>
);

export default SignIn;
