import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyle';

import Header from './components/Header';

import Routes from './routes';

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
