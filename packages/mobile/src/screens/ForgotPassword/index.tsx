import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useNavigation } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import Input from '../../components/Input';

import { Container, Title, InputName, GoBack, GoBackText } from './styles';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { Unform } from '../SignIn/styles';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

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

        Alert.alert('Success', 'Password recovery email sent');

        navigation.navigate('SignIn');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        Alert.alert('Error', 'Error sending recovery email');
      }
    },
    [navigation],
  );

  return (
    <Container>
      <Unform ref={formRef} onSubmit={handleSubmit}>
        <Title>Password recovery</Title>

        <View style={{ flexDirection: 'row' }}>
          <InputName>Email address</InputName>
        </View>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          returnKeyType="next"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />

        <Button onPress={() => formRef.current?.submitForm()}>Recover</Button>

        <GoBack onPress={() => navigation.goBack()}>
          <GoBackText>Go Back</GoBackText>
        </GoBack>
      </Unform>
    </Container>
  );
};

export default ForgotPassword;
