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
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        margin-left: 5px;
        color: #f9c74f;
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
