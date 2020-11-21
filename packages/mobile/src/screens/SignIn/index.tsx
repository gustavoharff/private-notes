import React, { useCallback, useRef } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/icon.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  HeaderTitle,
  HeaderContent,
  Unform,
  InputName,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

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

        Alert.alert('Error', 'Authentication failure');
      }
    },
    [signIn],
  );

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
          <Image source={logo} style={{ width: 100, height: 100 }} />
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
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <View style={{ flexDirection: 'row' }}>
              <InputName>Password</InputName>
            </View>
            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Logn in
            </Button>
          </Unform>

          <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
            <ForgotPasswordText>Forgot your password?</ForgotPasswordText>
            <ForgotPasswordText style={{ color: '#f9c74f' }}>
              Recover password
            </ForgotPasswordText>
          </ForgotPassword>

          <CreateAccount onPress={() => navigation.navigate('SignUp')}>
            <CreateAccountText>Dont have an account?</CreateAccountText>
            <CreateAccountText style={{ color: '#f9c74f' }}>
              Sign up
            </CreateAccountText>
          </CreateAccount>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
