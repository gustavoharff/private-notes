import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 617px;

  button {
    border: 0;
    width: 250px;
    height: 50px;
    background: #f94144;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;
    font-size: 16px;

    &:hover {
      background: ${darken(0.2, '#f94144')};
    }
  }
`;
