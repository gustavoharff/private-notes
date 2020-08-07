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
    width: 30px;
    height: 30px;
  }

  h3 {
    margin-left: 10px;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;
    p {
      opacity: 0.7;
    }
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgb(249, 204, 4);
  }
`;
