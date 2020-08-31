import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

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
