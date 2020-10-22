import React, { useCallback, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

export interface Note {
  id: string;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const { signOut, updateUser, user } = useAuth();

  const handleDeleteNote = useCallback(async (id: string) => {
    await api.delete(`notes/${id}`);

    const response = await api.get('notes');

    setNotes(response.data);
  }, []);

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
        <ProfileButton>
          <UserAvatar source={{ uri: user.avatar_url }} />
        </ProfileButton>
      </Header>
      <NotesList
        data={notes}
        keyExtractor={(note) => note.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: 'center' }}
        renderItem={({ item: note }) => (
          <Note deleteNote={handleDeleteNote} note={note} />
        )}
      />
      <TouchableOpacity onPress={signOut}>
        <Text style={{ color: '#fff' }}>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
