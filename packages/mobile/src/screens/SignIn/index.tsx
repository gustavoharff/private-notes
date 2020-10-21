import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import logo from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, HeaderTitle, HeaderContent, InputName } from './styles';

const SignIn: React.FC = () => (
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
        <View style={{ flexDirection: 'row' }}>
          <InputName>Email address</InputName>
        </View>

        <Input name="email" placeholder="you@example.com" />
        <View style={{ flexDirection: 'row' }}>
          <InputName>Password</InputName>
        </View>
        <Input name="password" placeholder="Enter you password" />

        <Button>Log in</Button>
      </Container>
    </ScrollView>
  </KeyboardAvoidingView>
);

export default SignIn;
