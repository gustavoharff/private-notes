import styled from 'styled-components/native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  margin-top: 20px;
  font-family: 'Apple SD Gothic Neo';
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
`;

export const HeaderContent = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Apple SD Gothic Neo';
  text-align: left;
  margin-bottom: 20px;
`;

export const InputName = styled.Text`
  color: #fff;
  width: 100%;
  max-width: 350px;
  margin-bottom: 5px;
  font-family: 'Apple SD Gothic Neo';
  font-size: 15px;
  text-align: left;
`;

export const Unform = styled(Form)`
  width: 100%;
  align-items: center;
`;
