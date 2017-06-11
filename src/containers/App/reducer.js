import { fromJS } from 'immutable'

import { DEFAULT_ACTION, DIM_NAV_MENU } from './constants'

const initialState = fromJS({
  dimNavMenu: false
})

function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case DEFAULT_ACTION:
      return state.set(payload)
    case DIM_NAV_MENU:
      return state.set('dimNavMenu', payload)
    default:
      return state
  }
}

export default reducer
