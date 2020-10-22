import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0 auto;
  width: 100%;
  max-width: 380px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid #5f6368;
  box-shadow: 4px 2px 2px rgba(0, 0, 0, 1);
  border-radius: 9px;
  flex-direction: row;
`;

export const Content = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Input = styled.TextInput`
  border: 0;
  padding: 20px 0 20px 0;
  color: #fff;
  font-size: 14px;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;
