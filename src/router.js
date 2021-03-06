import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Home from './containers/Home'
import Game from './containers/Game'
import Stats from './containers/Stats'
import Settings from './containers/Settings'

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="game" component={Game}/>
      <Route path="stats" component={Stats}/>
      <Route path="settings" component={Settings}/>
    </Route>
  </Router>
)

export default router
