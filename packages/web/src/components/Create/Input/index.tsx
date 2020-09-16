import React from 'react';
import { HTMLMotionProps } from 'framer-motion';

import { Container } from './styles';

interface InputProps extends HTMLMotionProps<'input'> {
  show: boolean;
}

const Input: React.FC<InputProps> = (props) => <Container layout {...props} />;

export default Input;
