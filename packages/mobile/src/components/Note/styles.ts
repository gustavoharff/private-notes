import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 9px;
  border: 1px solid #5f6368;
  width: 100%;
  min-width: 200px;
  max-width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 4px 3px 2px rgba(0, 0, 0, 1);
  flex-direction: row;
`;

export const Content = styled.View`
  justify-content: center;
  max-width: 100%;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #fff;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;

export const Description = styled.Text`
  color: #fff;
  padding-top: 10px;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;
