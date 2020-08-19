import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import Header from './components/Header';

const Routes: React.FC = () => (
  <HashRouter>
    <Header />

    <Route path="/" exact component={Dashboard} />
    <Route path="/notes" component={Notes} />
    <Route path="/profile" component={Profile} />
  </HashRouter>
);

export default Routes;
