import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 900px;

  > main {
    margin: auto;
    border: 0;
    background: none;

    div + & {
      margin-left: 10px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 78px;
      width: 200px;
      border-radius: 9px 9px 0 0;
      text-align: center;
      background: #f9c74f;

      input {
        max-width: 190px;
        font-weight: bold;
        text-align: center;
        background: none;
        border: 0;
        color: #333;
        font-size: 16px;
        padding: 5px;
      }
    }

    button {
      border: 0;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 34px;
      width: 200px;
      border-radius: 0 0 9px 9px;
      background: #90be6d;
      transition: 0.2s;

      &:hover {
        background: ${shade(0.2, '#90be6d')};
      }
    }
  }
`;

export const Note = styled.div`
  margin: auto;
  border-radius: 9px;

  & + div {
    margin-left: 10px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 78px;
    width: 200px;
    border-radius: 9px 9px 0 0;
    text-align: center;
    background: #f9c74f;

    strong {
      text-align: center;
      background: none;
      border: 0;
      color: #333;
    }
  }

  button {
    border: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 200px;
    border-radius: 0 0 9px 9px;
    background: #f46262;

    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#f46262')};
    }
  }
`;
