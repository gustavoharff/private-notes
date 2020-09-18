import React, { useCallback, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import { AddNote } from './styles';

import Input from './Input';

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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { token } = useAuth();

  const toggleTitleFocused = useCallback(() => {
    setTitleFocused(true);
  }, []);

  const toggleTitleBlur = useCallback(() => {
    setTitleFocused(!!title || !!description);
  }, [title, description]);

  const handleAddNote = useCallback(async () => {
    const response = await api.post(
      'notes',
      {
        title: title !== '' ? title : 'Title not defined',
        content: description !== '' ? description : 'Description not defined',
      },
      {
        headers: {
          Authorization: `Beader ${token}`,
        },
      },
    );

    setTitle('');
    setDescription('');
    setTitleFocused(false);
    setNotes([...notes, response.data]);
  }, [setNotes, title, token, description, notes]);

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e) => {
    setDescription(e.target.value);
  }, []);

  return (
    <AnimatePresence>
      <AddNote
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.form layout>
          <motion.div layout>
            <Input
              show
              placeholder="Type the title here"
              value={title}
              onChange={handleTitleChange}
              onFocus={toggleTitleFocused}
              onBlur={toggleTitleBlur}
            />

            <Input
              show={titleFocused}
              placeholder="Type the description here"
              value={description}
              onChange={handleDescriptionChange}
            />
          </motion.div>

          <motion.button layout type="button" onClick={handleAddNote}>
            <FiPlus size={20} />
          </motion.button>
        </motion.form>
      </AddNote>
    </AnimatePresence>
  );
};
export default Create;
