import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-width: 1px;
  border-color: #5f6368;
  border-style: solid;
  border-radius: 9px;
  margin-bottom: 8px;
  max-width: 350px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);

  ${(props) =>
    (props.isFocused || props.isFilled) &&
    css`
      border-color: #f9c74f;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 14px;
  border: 0;
  color: #fff;
  font-family: ${Platform.OS === 'ios' ? 'Apple SD Gothic Neo' : 'Arial'};
  font-style: normal;
`;
