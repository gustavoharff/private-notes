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
  const [newTitleFocudes, setNewTitleFocudes] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newDescription, setnewDescription] = useState('');

  const { token } = useAuth();

  const handleNewTitleFocudes = useCallback(() => {
    setNewTitleFocudes(true);
  }, []);

  const handleNewTitleBlur = useCallback(() => {
    setNewTitleFocudes(!!newNoteTitle || !!newDescription);
  }, [newNoteTitle, newDescription]);

  const handleAddNote = useCallback(async () => {
    const response = await api.post(
      'notes',
      {
        title: newNoteTitle !== '' ? newNoteTitle : 'Title not defined',
        content:
          newDescription !== '' ? newDescription : 'Description not defined',
      },
      {
        headers: {
          Authorization: `Beader ${token}`,
        },
      },
    );

    setNewNoteTitle('');
    setnewDescription('');
    setNewTitleFocudes(false);
    setNotes([...notes, response.data]);
  }, [setNotes, newNoteTitle, token, newDescription, notes]);

  const handleTitleChange = useCallback((e) => {
    setNewNoteTitle(e.target.value);
  }, []);

  const handleDescriptionChange = useCallback((e) => {
    setnewDescription(e.target.value);
  }, []);

  return (
    <AnimatePresence>
      <AddNote layout>
        <motion.form layout>
          <motion.div layout>
            <Input
              show
              placeholder="Type the title here"
              value={newNoteTitle}
              onChange={handleTitleChange}
              onFocus={handleNewTitleFocudes}
              onBlur={handleNewTitleBlur}
            />

            <Input
              show={newTitleFocudes}
              placeholder="Type the description here"
              value={newDescription}
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
