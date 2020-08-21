import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled(Link)<{ color: string }>`
  width: 250px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
    width: 100%;
    height: 100%;
    border: 0;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    background: ${(props) => props.color};
    border-radius: 8px;
    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => darken(0.2, props.color)};
    }
  }
`;
