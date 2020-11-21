import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  img {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 500px) {
    flex-direction: column;

    img {
      width: 64px;
      height: 64px;
      margin-bottom: 20px;
    }

    div {
      margin-left: 0px;
    }
  }
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 40px 20px 40px 20px;
`;

export const Profile = styled(Link)`
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

  @media (max-width: 500px) {
    justify-content: space-between;
    padding-left: 10px;

    div {
      display: none;
    }
  }
`;
