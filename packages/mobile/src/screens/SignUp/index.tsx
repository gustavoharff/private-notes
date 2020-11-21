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
  GoBack,
  GoBackText,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid email address'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post('/users', {
          name: data.name,
          email: data.email,
          password: data.password,
        });

        Alert.alert('Success', 'Account created!');

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert('Error', 'Account creation error!');
      }
    },
    [navigation],
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
              <InputName>Full name</InputName>
            </View>
            <Input
              autoCorrect={false}
              name="name"
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />

            <View style={{ flexDirection: 'row' }}>
              <InputName>Email address</InputName>
            </View>
            <Input
              ref={emailInputRef}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="email"
              returnKeyType="next"
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <View style={{ flexDirection: 'row' }}>
              <InputName>Create password</InputName>
            </View>
            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              returnKeyType="send"
              underlineColorAndroid="transparent"
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Sign up
            </Button>
          </Unform>

          <GoBack onPress={() => navigation.navigate('SignIn')}>
            <GoBackText>Already have an account?</GoBackText>
            <GoBackText style={{ color: '#f9c74f' }}>Log in</GoBackText>
          </GoBack>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
