import React, { useState, useEffect } from 'react';
import { TiArrowLeft } from 'react-icons/ti';
import { useParams } from 'react-router-dom';

import ButtonLink from '../../components/ButtonLink';
import Button from '../../components/Button';
import Header from '../../components/Header';

import { Container, Title, Text } from './styles';

const Notes: React.FC = () => {
  const { id } = useParams();
  const [content, setContent] = useState(() => {
    const storagedContent = localStorage.getItem(`@Notes:content-${id}`);

    if (storagedContent) {
      return JSON.parse(storagedContent);
    }
    return { text: '', title: '' };
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

  const handleClearContent = (): void => {
    setContent({ text: '', title: '' });
    localStorage.setItem(`@Notes:content-${id}`, JSON.stringify(content));
  };

  return (
    <>
      <Header />
      <Container>
        <Title
          placeholder="Type the title"
          onChange={handleChangeTitle}
          value={content.title}
        />

        <Text
          maxLength={3800}
          onChange={handleChangeText}
          value={content.text}
        />

        <div>
          <ButtonLink to="/lobby" title="Go Back" color="#90be6d">
            <TiArrowLeft size={30} />
          </ButtonLink>
          <Button
            onClick={handleClearContent}
            title="Clear the note"
            color="#f94144"
          />
        </div>
      </Container>
    </>
  );
};

export default Notes;
