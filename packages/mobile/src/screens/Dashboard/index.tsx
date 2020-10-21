import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Text style={{ color: '#fff' }}>Dashboard</Text>
      <TouchableOpacity onPress={signOut}>
        <Text style={{ color: '#fff' }}>Sair</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Dashboard;
