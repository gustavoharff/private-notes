import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password';
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
