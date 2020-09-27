import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components/macro'
import { Provider } from 'react-redux'
import { Header } from './components'
import { Theme } from './constants'

import { StatsScreen, DrawScreen } from './screens'
import { store } from './state'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/stats">
              <StatsScreen />
            </Route>
            <Route path="/">
              <DrawScreen />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  )
}
