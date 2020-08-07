import React, { useState, useEffect } from 'react';
import { TiArrowLeft } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import { Container, Title, Text } from './styles';

const Notes: React.FC = () => {
  const [title, setTitle] = useState(() => {
    const storagedTitle = localStorage.getItem('@Notes:title');

    if (storagedTitle) {
      return JSON.parse(storagedTitle);
    }
    return '';
  });

  const [content, setContent] = useState(() => {
    const storagedContent = localStorage.getItem('@Notes:content');

    if (storagedContent) {
      return JSON.parse(storagedContent);
    }
    return '';
  });

  useEffect(() => {
    localStorage.setItem('@Notes:title', JSON.stringify(title));
  }, [title]);

  useEffect(() => {
    localStorage.setItem('@Notes:content', JSON.stringify(content));
  }, [content]);

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setTitle(event.target.value);
  };

  const handleTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContent(event.target.value);
  };

  return (
    <Container>
      <div>
        <Link to="/dashboard">
          <TiArrowLeft size={30} />
        </Link>

        <Title
          placeholder="Digite o título"
          onChange={handleTitleChange}
          value={title}
        />
      </div>

      <Text maxLength={3800} onChange={handleTextChange} value={content} />
    </Container>
  );
};

export default Notes;
