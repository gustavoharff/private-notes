import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 96px;
    margin-bottom: 20px;
  }

  h1,
  strong {
    margin-bottom: 20px;
  }
`;
