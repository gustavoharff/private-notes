import { HTMLMotionProps } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

type ButtonProps = HTMLMotionProps<'button'>;

const Button: React.FC<ButtonProps> = (props) => {
  return <Container {...props} />;
};

export default Button;
