import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Notes from './pages/Notes'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/notes" exact component={Notes} />
    </Switch>
  )
}

export default Routes
