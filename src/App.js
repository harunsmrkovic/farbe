import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { StatsScreen, DrawScreen } from './screens'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Draw</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/stats">
            <DrawScreen />
          </Route>
          <Route path="/">
            <StatsScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
