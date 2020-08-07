import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 590px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;

  a {
    margin-top: 50px;
    text-decoration: none;
    color: #fff;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.3, '#fff')};
    }
  }
`;
