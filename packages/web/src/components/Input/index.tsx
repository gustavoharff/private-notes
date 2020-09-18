import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      isFilled={isFilled}
      onBlur={handleInputBlur}
      ref={inputRef}
      {...rest}
    />
  );
};

export default Input;
