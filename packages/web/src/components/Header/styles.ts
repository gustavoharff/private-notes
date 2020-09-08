import { RefAttributes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ProfileProps extends RefAttributes<HTMLAnchorElement> {
  signed: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px 20px 20px 40px;
`;

export const Content = styled.div``;

export const Profile = styled(Link)<ProfileProps>`
  visibility: ${(props) => (props.signed ? 'visible' : 'hidden')};

  display: flex;
  text-decoration: none;
  color: #fff;
  transition: 0.2s;
  align-items: center;

  &:hover {
    opacity: 70%;
  }

  div {
    text-align: right;
    margin-right: 10px;

    p {
      opacity: 0.7;
      transition: 0.2s;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #f9c74f;
    padding: 3px;
  }

  @media (max-width: 550px) {
    display: none;
  }
`;
