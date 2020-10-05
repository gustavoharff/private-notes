import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  border: 1px solid #5f6368;
  border-radius: 9px;
  padding: 10px 10px;

  line-height: 26px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  & + span {
    margin-top: 14px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      border-color: #f9c74f;
    `}


    &:focus {
    border-color: #f9c74f;
  }

  input {
    font-size: 14px;
    flex: 1;
    background: none;
    border: 0;
    color: #fff;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 10px;

  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
