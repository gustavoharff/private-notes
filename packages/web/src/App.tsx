import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';

import Routes from './routes';

import { AuthProvider } from './hooks/auth';

import Header from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Header />
      <Routes />
    </AuthProvider>

    <GlobalStyle />
  </Router>
);

reactDOM.render(<App />, document.getElementById('root'));
