import React from 'react';

import Button from '../../components/Button';

import logo from '../../assets/icon.png';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <img src={logo} alt="My Note App" />
    <h1>Welcome to My Note App</h1>

    <strong>This application does not save content in the cloud!</strong>
    <Button to="/lobby" title="Go to notes" color="#90be6d" />
  </Container>
);
export default Dashboard;
