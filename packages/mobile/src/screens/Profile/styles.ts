import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { Form } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 30px 40px;
  padding-top: ${Platform.OS === 'android' ? 0 : 40}px;

  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 0px;
  z-index: 999;
  padding: 40px;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
  margin-bottom: 40px;
  border-color: #f9c74f;
  border-width: 5px;
  border-style: solid;
  border-radius: 93px;
  padding: 2px;
  width: 184px;
  height: 184px;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  align-self: center;
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
