import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  title: string;
  color: string;
  onClick: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({ title, color, children, onClick }) => ( //eslint-disable-line
  <Container onClick={onClick} type="button" color={color}>
    {children}
    {title}
  </Container>
);
export default Button;
