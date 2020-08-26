import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import SignIn from './pages/SignIn';

// import Dashboard from './pages/Dashboard';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import Lobby from './pages/Lobby';

const Routes: React.FC = () => (
  <HashRouter>
    <Route path="/" exact component={SignIn} />
    <Route path="/lobby" component={Lobby} />
    <Route path="/notes/:id" component={Notes} />
    <Route path="/profile" component={Profile} />
  </HashRouter>
);

export default Routes;
