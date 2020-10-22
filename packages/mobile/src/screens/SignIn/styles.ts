import styled from 'styled-components/native';
import { Form } from '@unform/mobile';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 1px 2px rgba(0, 0, 0, 1);
`;

export const HeaderTitle = styled.Text`
  margin-top: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;

export const HeaderContent = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: left;
  margin-bottom: 20px;

  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;

export const InputName = styled.Text`
  color: #fff;
  width: 100%;
  max-width: 350px;
  margin-bottom: 5px;
  font-size: 15px;
  text-align: left;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;

export const Unform = styled(Form)`
  width: 100%;
  align-items: center;
`;
