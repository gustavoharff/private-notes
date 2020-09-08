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
  height: calc(100% - 130px);
  padding-bottom: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    display: flex;
    flex-direction: column;
    width: 240px;

    h1 {
      margin-bottom: 30px;
      font-size: 36px;
    }

    span {
      font-size: 14px;
    }

    button {
      margin-top: 35px;
      height: 40px;
      border-radius: 40px;
      background: #f9c74f;
      border: 0;
      transition: 0.2s;
      font-weight: bold;

      &:hover {
        background: ${shade(0.2, '#f9c74f')};
      }
    }

    button + span {
      margin-top: 25px;

      > a {
        color: #f9c74f;
        margin-left: 5px;
        transition: 0.2s;

        &:hover {
          color: ${shade(0.2, '#f9c74f')};
        }
      }
    }
  }
`;
