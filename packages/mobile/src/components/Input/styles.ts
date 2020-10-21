import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #5f6368;
  border-radius: 9px;
  margin-bottom: 8px;
  max-width: 350px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  border: 0;
  color: #fff;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
  font-style: normal;
`;
