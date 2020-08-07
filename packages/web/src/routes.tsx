import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Notes from './pages/Notes';

const Routes: React.FC = () => (
  <HashRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Home} />
    <Route path="/notes" component={Notes} />
  </HashRouter>
);

export default Routes;
