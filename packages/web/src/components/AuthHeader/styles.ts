import styled from 'styled-components';

export const Container = styled.div`
  width: 440px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    flex-direction: column;

    img {
      width: 64px;
      height: 65px;
      margin-bottom: 20px;
    }

    div {
      margin-left: 0px;
    }
  }
`;
