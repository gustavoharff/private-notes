import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { Text, TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  containerStyle?: object;
}

interface InputValueRef {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, containerStyle, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueRef>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
    >
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
