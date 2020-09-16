import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
`;

export const Notes = styled(motion.ul)`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;
