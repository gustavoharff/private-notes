import React, { useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import { Container, Content, Input } from './styles';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface CreateProps {
  notes: Note[];
  setNotes(notes: Note[]): void;
}

const Create: React.FC<CreateProps> = ({ notes, setNotes }) => {
  const [titleFocused, setTitleFocused] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = useCallback(async () => {
    const response = await api.post('notes', {
      title: title !== '' ? title : 'Title not defined',
      content: description !== '' ? description : 'Description not defined',
    });

    setTitle('');
    setDescription('');
    setTitleFocused(false);
    setDescriptionFocused(false);
    setNotes([...notes, response.data]);
  }, [setNotes, title, description, notes]);

  const handleTitleFocused = useCallback(() => {
    setTitleFocused(true);
  }, []);

  const handleTitleBlur = useCallback(() => {
    setTimeout(() => {
      setTitleFocused(false);
    }, 500);
  }, []);

  const handleDescriptionFocused = useCallback(() => {
    setDescriptionFocused(true);
  }, []);

  const handleDescriptionBlur = useCallback(() => {
    setDescriptionFocused(false);
  }, []);

  const handleTitleChange = useCallback((e) => {
    setTitle(e);
  }, []);

  const handleDescriptionChange = useCallback((e) => {
    setDescription(e);
  }, []);

  return (
    <Container>
      <Content>
        <Input
          placeholder="Type the title here"
          placeholderTextColor="#5f6368"
          value={title}
          keyboardAppearance="dark"
          onChangeText={handleTitleChange}
          onFocus={handleTitleFocused}
          onBlur={handleTitleBlur}
        />
        {(titleFocused || descriptionFocused || !!description) && (
          <Input
            placeholder="Type the description here"
            keyboardAppearance="dark"
            placeholderTextColor="#5f6368"
            value={description}
            onChangeText={handleDescriptionChange}
            onFocus={handleDescriptionFocused}
            onBlur={handleDescriptionBlur}
          />
        )}
      </Content>
      <TouchableOpacity onPress={handleAddNote}>
        <Icon name="plus" size={20} color="#5f6368" />
      </TouchableOpacity>
    </Container>
  );
};

export default Create;
