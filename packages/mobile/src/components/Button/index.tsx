import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  loading: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color="#000" />
    ) : (
      <ButtonText>{children}</ButtonText>
    )}
  </Container>
);

export default Button;
