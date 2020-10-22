import React, { useRef, useCallback } from 'react';
import {
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';

import { ScrollView } from 'react-native-gesture-handler';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  BackButton,
  Title,
  UserAvatarButton,
  UserAvatar,
  InputName,
} from './styles';
import { useAuth } from '../../hooks/auth';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, updateUser, signOut } = useAuth();
  const { goBack } = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleUpdateProfile = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: (val) => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: (val) => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
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

        goBack();

        Alert.alert('Perfil atualizado com sucesso!');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        );
      }
    },
    [goBack, updateUser],
  );

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        maxWidth: 300,
        maxHeight: 300,
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar.');
          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpg`,
          uri: response.uri,
        });

        api.patch('users/avatar', data).then((apiResponse) => {
          updateUser(apiResponse.data);
        });
      },
    );
  }, [updateUser, user.id]);

  return (
    <>
      <BackButton onPress={handleGoBack}>
        <Icon name="chevron-left" size={24} color="#f9c74f" />
      </BackButton>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView>
          <Container>
            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar source={{ uri: user.avatar_url }} />
            </UserAvatarButton>

            <View>
              <Title>My profile</Title>
            </View>
            <Form
              initialData={user}
              ref={formRef}
              onSubmit={handleUpdateProfile}
            >
              <View style={{ flexDirection: 'row' }}>
                <InputName>Full name</InputName>
              </View>
              <Input
                autoCapitalize="words"
                autoCorrect={false}
                name="name"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <View style={{ flexDirection: 'row' }}>
                <InputName>Email address</InputName>
              </View>

              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                returnKeyType="next"
                containerStyle={{ marginBottom: 24 }}
                onSubmitEditing={() => {
                  oldPasswordInputRef.current?.focus();
                }}
              />

              <View style={{ flexDirection: 'row' }}>
                <InputName>Current password</InputName>
              </View>

              <Input
                ref={oldPasswordInputRef}
                name="old_password"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <View style={{ flexDirection: 'row' }}>
                <InputName>New password</InputName>
              </View>

              <Input
                ref={passwordInputRef}
                name="password"
                textContentType="newPassword"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current?.focus();
                }}
              />

              <View style={{ flexDirection: 'row' }}>
                <InputName>Confirm password</InputName>
              </View>

              <Input
                ref={confirmPasswordInputRef}
                name="password_confirmation"
                textContentType="newPassword"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>

            <Button onPress={() => formRef.current?.submitForm()}>
              Confirm changes
            </Button>

            <Button
              style={{ backgroundColor: '#e63946', borderColor: '#9d0208' }}
              onPress={signOut}
            >
              Exit the application
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
