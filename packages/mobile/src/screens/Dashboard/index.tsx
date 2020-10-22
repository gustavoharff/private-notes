import React, { useCallback, useEffect, useState } from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import {
  Container,
  Header,
  ProfileButton,
  UserAvatar,
  NotesList,
} from './styles';
import Note from '../../components/Note';
import Create from '../../components/Create';

export interface Note {
  id: string;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const { navigate } = useNavigation();

  const { signOut, updateUser, user } = useAuth();

  const handleDeleteNote = useCallback(async (id: string) => {
    await api.delete(`notes/${id}`);

    const response = await api.get('notes');

    setNotes(response.data);
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);

  useEffect(() => {
    api
      .get('profile')
      .then((response) => updateUser(response.data))
      .catch(() => {
        signOut();
      });

    api.get('notes').then((response) => setNotes(response.data));
  }, [updateUser, signOut]);

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <ProfileButton onPress={navigateToProfile}>
          <UserAvatar
            source={{
              uri: user.avatar_url
                ? user.avatar_url
                : 'https://api.adorable.io/avatars/56/profile.png',
            }}
          />
        </ProfileButton>
      </Header>

      <Create setNotes={setNotes} notes={notes} />

      <NotesList
        data={notes}
        keyExtractor={(note) => note.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center' }}
        renderItem={({ item: note }) => (
          <Note deleteNote={handleDeleteNote} note={note} />
        )}
      />
    </Container>
  );
};

export default Dashboard;
