import React from 'react';

import { Container } from './styles';
import Button from '../../components/Button';

const Profile: React.FC = () => (
  <Container>
    <Button title="Exit the application" color="#f94144" to="/" />
  </Container>
);

export default Profile;
