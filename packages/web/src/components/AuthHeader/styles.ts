import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
  }

  @media (max-width: 500px) {
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
