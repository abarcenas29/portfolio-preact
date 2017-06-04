import { applyMiddleware, createStore } from 'redux'

// 3rd party reducers
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger'

const env = process.env.NODE_ENV
/**
 * Since this boilerplate is for small-mid projects.
 * Thunk is more appropriate for this case
 */
import thunk from 'redux-thunk'
import reducers from './reducers'

const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const middleWears = [routeMiddleware, thunk]

// only put logger if not in production
if (env === 'development') {
  console.log('Logger is Enabled')
  middleWears.push(logger)
}

const reduxMiddleware = applyMiddleware(...middleWears)

export { history }
export default createStore(reducers, reduxMiddleware)
