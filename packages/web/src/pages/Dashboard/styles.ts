import styled from 'styled-components';
import { shade } from 'polished';

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

export const AddNote = styled.div`
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
    height: 50px;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
    border: 1px solid #5f6368;
    border-radius: 9px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

    input {
      height: 100%;
      width: 100%;
      background: none;
      border: 0;
      padding: 20px 0 20px 20px;
      color: #fff;
      flex: 1;
      font-size: 14px;
    }

    button {
      width: 50px;
      display: flex;
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

export const Notes = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0 20px;
`;

export const Note = styled.div`
  display: flex;
  border-radius: 9px;
  border: 1px solid #5f6368;
  width: 100%;
  max-width: 251px;
  margin-top: 20px;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  div {
    display: flex;
    width: 100%;
  }

  button {
    background: none;
    color: #fff;
    border: 0;

    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
