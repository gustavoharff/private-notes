import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
}

export const Container = styled.input<ContainerProps>`
  background: none;
  width: 100%;
  max-width: 350px;
  border: 1px solid #5f6368;
  border-radius: 9px;
  padding: 4px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 26px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #f9c74f;
    `}

  & + span {
    margin-top: 14px;
  }

  &:focus {
    border-color: #f9c74f;
  }
`;
