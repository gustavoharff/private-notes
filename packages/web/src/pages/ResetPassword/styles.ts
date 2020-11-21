import styled, { keyframes } from 'styled-components';
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

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100%;

  animation: ${appearFromLeft} 1s;

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 320px;
    padding: 20px;
    text-align: left;

    h1 {
      margin-bottom: 30px;
      font-size: 20px;
    }

    span {
      width: 100%;
      font-size: 14px;
      margin-bottom: 8px;

      > a {
        color: #f9c74f;
        margin-left: 5px;
        transition: 0.2s;

        &:hover {
          color: ${shade(0.2, '#f9c74f')};
        }
      }
    }

    button + span {
      margin-top: 25px;
    }
  }
`;
