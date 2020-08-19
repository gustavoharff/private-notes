import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #0003;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 960px;
  margin: auto;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h3 {
    margin-left: 10px;
  }
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
    border: 2px solid #f9cc04;
    padding: 3px;
  }
`;
