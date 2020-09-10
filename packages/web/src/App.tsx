import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

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
    <ToastContainer autoClose={3000} />
    <GlobalStyle />
  </Router>
);

reactDOM.render(<App />, document.getElementById('root'));
