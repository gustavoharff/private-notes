import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-right: 0;

  @media (min-width: 600px) {
    margin-right: 40px;
  }

  img {
    width: 96px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const Credentials = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(32, 32, 36);
  padding: 40px;
  border-radius: 8px;

  h2 {
    margin-bottom: 10px;
  }

  input {
    margin-top: 10px;

    &::placeholder {
      opacity: 0.6;
    }
  }

  a {
    margin-top: 20px;
    color: #fff;
  }
`;
