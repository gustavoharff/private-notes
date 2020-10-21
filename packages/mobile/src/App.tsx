import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <View style={{ flex: 1, backgroundColor: '#191622' }} />
    <StatusBar barStyle="light-content" backgroundColor="#191622" />
  </>
);

export default App;
