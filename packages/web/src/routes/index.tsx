import React from 'react';
import { HashRouter } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Notes from '../pages/Notes';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <HashRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/notes/:id" component={Notes} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </HashRouter>
);

export default Routes;
