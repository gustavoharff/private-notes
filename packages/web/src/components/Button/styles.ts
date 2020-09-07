import styled from 'styled-components';
import { darken } from 'polished';

interface ButtonProps {
  color: string;
}

export const Container = styled.button<ButtonProps>`
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
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
`;
