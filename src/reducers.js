// reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AppReducer from './containers/App/reducer'

export default combineReducers({
  App: AppReducer,
  router: routerReducer
})
