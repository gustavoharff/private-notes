import React from 'react';

import { Container } from './styles';

import icon from '../../assets/icon-64.png';

const AuthHeader: React.FC = () => (
  <Container>
    <img src={icon} alt="" />
    <div>
      <strong>Welcome to Private Notes</strong>
      <span>Sign in to save your content to the cloud.</span>
    </div>
  </Container>
);

export default AuthHeader;
