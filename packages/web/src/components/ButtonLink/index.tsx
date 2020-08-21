import React from 'react';

import { Container } from './styles';

interface ButtonProps {
  to: string;
  title: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ to, title, color, children }) => ( //eslint-disable-line
  <Container to={to} color={color}>
    <button type="button">
      {children}
      {title}
    </button>
  </Container>
);
export default Button;
