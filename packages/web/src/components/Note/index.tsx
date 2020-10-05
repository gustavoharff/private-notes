import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash, FiEyeOff, FiEye } from 'react-icons/fi';

import { Container, ContentNote, ButtonsContainer } from './styles';

interface NoteProps {
  note: {
    id: string;
    title: string;
    content: string;
  };
  deleteNote(id: string): void;
}

const Note: React.FC<NoteProps> = ({ deleteNote, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <Container layout key={note.id}>
      <AnimatePresence>
        <ContentNote layout>
          <motion.strong layout>{note.title}</motion.strong>
          {isOpen === true && (
            <motion.div
              layout
              style={{ paddingTop: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span> {note.content}</motion.span>
            </motion.div>
          )}
        </ContentNote>
      </AnimatePresence>

      <AnimatePresence>
        <ButtonsContainer>
          {isOpen ? (
            <motion.button layout type="button" onClick={() => toggleOpen()}>
              <FiEye size={18} />
            </motion.button>
          ) : (
            <motion.button layout type="button" onClick={() => toggleOpen()}>
              <FiEyeOff size={18} />
            </motion.button>
          )}
          <motion.button
            layout
            type="button"
            onClick={() => deleteNote(note.id)}
          >
            <FiTrash size={18} />
          </motion.button>
        </ButtonsContainer>
      </AnimatePresence>
    </Container>
  );
};

export default Note;
