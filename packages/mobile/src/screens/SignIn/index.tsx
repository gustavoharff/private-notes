import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  HeaderTitle,
  HeaderContent,
  Unform,
  InputName,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: SignInFormData) => {
    console.log(data);
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logo} />
          <View>
            <HeaderTitle>Welcome to Private Notes</HeaderTitle>
          </View>
          <View>
            <HeaderContent>
              Sign in to save your content to the cloud.
            </HeaderContent>
          </View>

          <Unform ref={formRef} onSubmit={handleSubmit}>
            <View style={{ flexDirection: 'row' }}>
              <InputName>Email address</InputName>
            </View>

            <Input name="email" placeholder="you@example.com" />
            <View style={{ flexDirection: 'row' }}>
              <InputName>Password</InputName>
            </View>
            <Input name="password" placeholder="Enter you password" />

            <Button onPress={() => formRef.current?.submitForm()}>
              Log in
            </Button>
          </Unform>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
