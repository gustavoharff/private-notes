import React, { useCallback, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import Modal from '../Modal';
import Input from '../Input';
import api from '../../services/api';

import { Form } from './styles';
import { useNotes } from '../../hooks/notes';

interface Note {
  id: string;
  title: string;
  content: string;
}

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  note: Note;
}

const ModalEditFood: React.FC<ModalProps> = ({ isOpen, setIsOpen, note }) => {
  const formRef = useRef<FormHandles>(null);

  const { setNotes } = useNotes();

  const handleAddNote = useCallback(
    async (data: Note) => {
      await api.put(`notes/${note.id}`, {
        title: data.title,
        content: data.content,
      });

      const response = await api.get('notes');

      setNotes(response.data);

      setIsOpen();
    },
    [note.id, setNotes, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleAddNote} initialData={note}>
        <h1>Note editing</h1>

        <Input name="title" placeholder="Type the title here" />
        <Input name="content" placeholder="Type the description here" />

        <button type="submit">
          <FiCheck size={28} />
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditFood;
