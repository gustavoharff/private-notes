import styled from 'styled-components';

export const Container = styled.input`
  width: 250px;
  height: 35px;
  display: flex;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
  text-align: left;
  border: 0;
  color: #333;
  font-size: 16px;
  background: ${(props) => props.color};
  border-radius: 8px;
  transition: background-color 0.2s;
`;
