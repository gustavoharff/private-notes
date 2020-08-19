import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);

  a {
    text-decoration: none;
    border: 0;
    width: 250px;
    height: 50px;
    background: #f9cc04;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;
    font-size: 16px;
    margin: 10px;

    &:hover {
      background: ${darken(0.3, '#F9CC04')};
    }
  }
`;
