import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

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
