import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const Container = styled(motion.button)`
  width: 100%;
  max-width: 350px;
  margin-top: 25px;
  height: 40px;
  border-radius: 9px;
  background: #f9c74f;
  border: 1px solid ${shade(0.2, '#f9c74f')};
  transition: 0.2s;
  font-weight: bold;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  &:hover {
    background: ${shade(0.2, '#f9c74f')};
  }
`;
