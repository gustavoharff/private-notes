import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './pages/Home'
import Notes from './pages/Notes'

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/notes" component={Notes} />
    </HashRouter>
  )
}

export default Routes
