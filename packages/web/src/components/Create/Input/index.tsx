import React from 'react';
import { HTMLMotionProps } from 'framer-motion';

import { Container } from './styles';

type InputProps = HTMLMotionProps<'input'>;

const Input: React.FC<InputProps> = (props) => <Container layout {...props} />;

export default Input;
