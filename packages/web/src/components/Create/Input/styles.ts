import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.input)`
  width: 100%;
  background: none;
  border: 0;
  padding: 20px 0 20px 20px;
  color: #f8f8f2;
  flex: 1;
  font-size: 14px;

  & + input {
    padding: 0 0 20px 20px;
    margin-top: 10px;
  }
`;
