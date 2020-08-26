import React from 'react';

import { Container } from './styles';

interface InputProps {
  type: 'text' | 'password';
  placeholder?: string;
  onChange?: CallableFunction;
  value: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  value,
}) => (
  <Container
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
  />
);

export default Input;
