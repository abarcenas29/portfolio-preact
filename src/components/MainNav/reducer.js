import { fromJS } from 'immutable'
import { SWITCH_TO_LINK } from './constants.js'

const initialState = fromJS({
  switchToLink: false
})

function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case SWITCH_TO_LINK:
      return state.set('switchToLink', payload)
    default:
      return state
  }
}

export default reducer
