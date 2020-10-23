import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FiEdit, FiEye, FiEyeOff, FiTrash } from 'react-icons/fi';
import ModalEditFood from '../ModalEditNote';

import { useNotes } from '../../hooks/notes';

import { Container, ContentNote, ButtonsContainer } from './styles';
import api from '../../services/api';

interface NoteProps {
  note: {
    id: string;
    title: string;
    content: string;
  };
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { setNotes } = useNotes();

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const toggleModal = useCallback((): void => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const handleDeleteNote = useCallback(
    async (id: string) => {
      await api.delete(`notes/${id}`);

      const response = await api.get('notes');

      setNotes(response.data);
    },
    [setNotes],
  );

  return (
    <>
      <ModalEditFood
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        note={note}
        key={note.id}
      />
      <Container layout>
        <AnimatePresence>
          <ContentNote layout>
            <motion.strong layout>{note.title}</motion.strong>
            {open === true && (
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
            {open ? (
              <motion.button layout type="button" onClick={() => toggleOpen()}>
                <FiEye size={18} />
              </motion.button>
            ) : (
              <motion.button layout type="button" onClick={toggleOpen}>
                <FiEyeOff size={18} />
              </motion.button>
            )}
            <motion.button layout type="button" onClick={toggleModal}>
              <FiEdit size={18} />
            </motion.button>
            <motion.button
              layout
              type="button"
              onClick={() => handleDeleteNote(note.id)}
            >
              <FiTrash size={18} />
            </motion.button>
          </ButtonsContainer>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Note;
