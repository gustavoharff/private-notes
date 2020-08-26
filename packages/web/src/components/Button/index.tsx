import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  title: string;
  color: string;
  onClick?: VoidFunction;
  type: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ title, color, children, onClick, type }) => ( //eslint-disable-line
  <Container onClick={onClick} type={type} color={color}>
    {children}
    {title}
  </Container>
);
export default Button;
