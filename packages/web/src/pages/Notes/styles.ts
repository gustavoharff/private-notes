import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: auto;
  padding: 40px 40px 20px 40px;

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;

      svg:hover {
        color: ${darken(0.3, '#fff')};
      }
    }
  }
`;

export const Title = styled.input`
  display: block;
  width: 600px;
  margin: auto;
  margin-left: 10px;
  padding: 10px;
  border: 0;
  background: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

export const Text = styled.textarea`
  margin: 20px auto;
  padding: 50px;
  width: 900px;
  height: 470px;
  border-radius: 5px;
  background: #444;

  color: #fff;
  font-size: 16px;
  border: 0;
  resize: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;

  &:focus {
    outline: none;
  }
`;
