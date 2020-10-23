import styled from 'styled-components';
import { shade } from 'polished';
import { motion } from 'framer-motion';

export const AddNote = styled(motion.div)`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  width: 100%;

  form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    border: 1px solid #5f6368;
    border-radius: 9px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
    justify-content: space-between;
    ::-webkit-scrollbar {
      display: none;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    button {
      display: flex;
      margin-right: 20px;
      align-items: center;
      justify-content: center;
      background: none;
      border: 0;
      color: #5f6368;

      &:hover {
        color: ${shade(0.2, '#5f6368')};
      }
    }
  }
`;
