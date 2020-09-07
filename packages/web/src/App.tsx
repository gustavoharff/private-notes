import React from 'react';
import reactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import { GlobalStyle } from './styles/global';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <GlobalStyle />
  </BrowserRouter>
);

reactDOM.render(<App />, mainElement);
