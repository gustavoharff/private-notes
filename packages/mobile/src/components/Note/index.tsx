import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Title, Description } from './styles';

interface NoteProps {
  note: {
    id: string;
    title: string;
    content: string;
  };
  deleteNote(id: string): Promise<void>;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Container>
      <Content>
        <Title>{note.title}</Title>
        {isOpen && <Description>{note.content}</Description>}
      </Content>
      <View style={{ flexDirection: 'row', paddingLeft: 10 }}>
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={toggleOpen}>
          {isOpen ? (
            <Icon name="eye" color="#fff" size={20} />
          ) : (
            <Icon name="eye-off" color="#fff" size={20} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={() => deleteNote(note.id)}
        >
          <Icon name="trash" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Note;
