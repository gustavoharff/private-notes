import 'regenerator-runtime/runtime.js';

import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

import { GlobalStyle } from './styles/global';
import Header from './components/Header';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Header />
      <Routes />

      <GlobalStyle />
    </BrowserRouter>
  </AuthProvider>
);

reactDOM.render(<App />, mainElement);
