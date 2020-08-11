import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Header />
    <Container>
      <Link to="/notes">Go to notes</Link>
    </Container>
  </>
);

export default Dashboard;
