import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';

import { AuthProvider } from './hooks/auth';

import Routes from './routes';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <GlobalStyle />
  </Router>
);

reactDOM.render(<App />, document.getElementById('root'));
