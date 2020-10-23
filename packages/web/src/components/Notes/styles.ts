import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NotesContainer = styled(motion.ul)`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;
