import React, { useState, useEffect } from 'react';
import { TiArrowLeft } from 'react-icons/ti';
import { Link, useParams } from 'react-router-dom';

import { Container, Title, Text } from './styles';

const Notes: React.FC = () => {
  const { id } = useParams();
  const [content, setContent] = useState(() => {
    const storagedContent = localStorage.getItem(`@Notes:content-${id}`);

    if (storagedContent) {
      return JSON.parse(storagedContent);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem(`@Notes:content-${id}`, JSON.stringify(content));
  }, [content]);

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setContent({ ...content, title: event.target.value });
  };

  const handleChangeText = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setContent({ ...content, text: event.target.value });
  };

  return (
    <Container>
      <div>
        <Link to="/lobby">
          <TiArrowLeft size={30} />
        </Link>

        <Title
          placeholder="Type the title"
          onChange={handleChangeTitle}
          value={content.title}
        />
      </div>

      <Text maxLength={3800} onChange={handleChangeText} value={content.text} />
    </Container>
  );
};

export default Notes;
