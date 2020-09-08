import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /* height: calc(100vh - 260px); */
  height: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

    input {
      background: none;
      border: 0;
      padding: 8px 0;
      border-bottom: 1px solid #333;
      color: #fff;
      font-size: 14px;
    }

    input + span {
      margin-top: 22px;
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
