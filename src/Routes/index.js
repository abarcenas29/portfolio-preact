import React from 'react'
import { Route, Switch } from 'react-router-dom'

import {
  App,
  Home,
  About,
  Contacts,
  /* ROUTE HOOK */
  NotFound
} from './Route'

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contacts} />
        {/* ROUTE GENERATOR */}
        <Route component={NotFound} />
      </Switch>
    </App>
  )
}

export default Routes
