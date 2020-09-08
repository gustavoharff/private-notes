import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 900px;
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
      color: #333;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    width: 200px;
    border-radius: 0 0 9px 9px;
    background: #f46262;
  }
`;
