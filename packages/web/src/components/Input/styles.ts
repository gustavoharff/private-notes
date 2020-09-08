import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
}

export const Container = styled.input<ContainerProps>`
  background: none;
  border: 0;
  padding: 8px 0;
  border-bottom: 1px solid #333;
  color: #fff;
  font-size: 14px;

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #f9c74f;
    `}

  & + span {
    margin-top: 22px;
  }

  &:focus {
    border-color: #f9c74f;
  }
`;
