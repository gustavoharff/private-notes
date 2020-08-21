import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px;

  div {
    min-width: 300px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    a {
      margin-right: 20px;

      > button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Title = styled.input`
  border: 0;
  width: 60%;
  text-align: center;
  background: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;

export const Text = styled.textarea`
  height: 60%;
  width: 60%;
  min-height: 150px;
  min-width: 400px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #444;
  color: #fff;
  font-size: 16px;
  border: 0;
  user-select: none;

  &:focus {
    outline: none;
  }
`;
