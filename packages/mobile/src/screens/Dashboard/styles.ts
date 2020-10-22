import { FlatList, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Note } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 24 : 24}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileButton = styled.TouchableOpacity`
  border-color: #f9c74f;
  border-width: 2px;
  border-style: solid;
  border-radius: 35px;
  padding: 3px;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const NotesList = styled(FlatList as new () => FlatList<Note>)`
  flex: 1;
  margin: 0 auto;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;
