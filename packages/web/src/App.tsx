import React from 'react';
import reactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';

import TitleBar from './components/TitleBar';

import Routes from './routes';

import { AuthProvider } from './hooks/auth';

import { GlobalStyle } from './styles/global';
import { NotesProvider } from './hooks/notes';

Modal.setAppElement('#root');

const App: React.FC = () => (
  <>
    <TitleBar />
    <Router>
      <AuthProvider>
        <NotesProvider>
          <Routes />
        </NotesProvider>
      </AuthProvider>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </Router>
  </>
);

reactDOM.render(<App />, document.getElementById('root'));
