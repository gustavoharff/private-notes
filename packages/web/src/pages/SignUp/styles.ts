import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 96px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
      margin-top: 10px;
    }

    a {
      margin-top: 20px;
      color: #fff;
    }
  }
`;
