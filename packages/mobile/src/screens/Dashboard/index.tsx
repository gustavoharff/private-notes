import React, { useCallback, useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

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

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
          <TouchableOpacity onPress={signOut}>
            <Text style={{ color: '#fff' }}>Sair</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Dashboard;
