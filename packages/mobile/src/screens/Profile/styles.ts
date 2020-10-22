import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  padding: 50px 30px ${Platform.OS === 'android' ? 70 : 130}px;

  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 80px;
  left: 0px;
  z-index: 999;
  padding: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  margin: 24px 0;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 98px;

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
