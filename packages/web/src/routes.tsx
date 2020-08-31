import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Profile from './pages/Profile';

const Routes: React.FC = () => (
  <HashRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/notes/:id" component={Notes} />
    <Route path="/profile" component={Profile} />
  </HashRouter>
);

export default Routes;
