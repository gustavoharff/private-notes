import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 590px;
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    width: 250px;
    height: 50px;
    background: #2ebc4f;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${darken(0.3, '#2ebc4f')};
    }

    svg {
      margin-left: 5px;
    }
  }
`;
