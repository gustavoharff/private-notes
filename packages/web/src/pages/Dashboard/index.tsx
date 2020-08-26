import React from 'react';

import Header from '../../components/Header';
import ButtonLink from '../../components/ButtonLink';

import logo from '../../assets/icon.png';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Header />
    <Container>
      <img src={logo} alt="My Note App" />
      <h1>Welcome to My Note App</h1>

      <strong>This application does not save content in the cloud!</strong>
      <ButtonLink to="/lobby" title="Go to notes" color="#90be6d" />
    </Container>
  </>
);
export default Dashboard;
