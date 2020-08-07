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

  img {
    padding: 30px;
    margin: auto;
  }

  h1 {
    padding: 20px;
  }
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
