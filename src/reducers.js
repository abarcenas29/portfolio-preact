// reducers
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AppReducer from './containers/App/reducer'
import MainNavReducer from 'components/MainNav/reducer'

export default combineReducers({
  App: AppReducer,
  MainNav: MainNavReducer,
  router: routerReducer
})
