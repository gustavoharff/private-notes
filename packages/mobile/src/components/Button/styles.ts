import styled from 'styled-components/native';
import { shade } from 'polished';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  max-width: 350px;
  margin-top: 10px;
  height: 40px;
  background: #f9c74f;
  border-radius: 9px;
  border: 1px solid ${shade(0.2, '#f9c74f')};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #312e38;
`;
