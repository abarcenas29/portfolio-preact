import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import store, { history } from './store'
import Routes from './routes'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}
