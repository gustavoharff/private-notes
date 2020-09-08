import 'regenerator-runtime/runtime.js';

import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/global';
import Header from './components/Header';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Routes />

    <GlobalStyle />
  </BrowserRouter>
);

reactDOM.render(<App />, mainElement);
