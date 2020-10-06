import React from 'react';
import reactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import TitleBar from './components/TitleBar';

import Routes from './routes';

import { AuthProvider } from './hooks/auth';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

const App: React.FC = () => (
  <>
    <TitleBar />
    <Router>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </Router>
  </>
);

reactDOM.render(<App />, document.getElementById('root'));
