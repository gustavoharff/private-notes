import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled(motion.li)`
  display: flex;
  border-radius: 9px;
  border: 1px solid #5f6368;
  width: 100%;
  max-width: 350px;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  animation: ${appearFromLeft} 1s;

  button {
    background: none;
    color: #fff;
    border: 0;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;

export const ContentNote = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 251px;
  word-wrap: break-word;

  span {
    color: #999;
  }
`;

export const ButtonsContainer = styled(motion.div)`
  display: flex;
  padding: 0 20px;
`;
