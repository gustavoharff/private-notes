import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 617px;

  a {
    width: 250px;
    height: 50px;
    background: #d95151;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${darken(0.3, '#D95151')};
    }
  }
`;
