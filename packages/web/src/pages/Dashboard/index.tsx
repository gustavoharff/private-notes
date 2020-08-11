import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/icon.png';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Header />
    <Container>
      <img src={logo} alt="My Note App" />
      <h1>Welcome to My Note App</h1>

      <h3>This application does not save content in the cloud!</h3>

      <Link to="/notes">Go to notes</Link>
    </Container>
  </>
);
export default Dashboard;
