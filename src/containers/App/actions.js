import { DEFAULT_ACTION, DIM_NAV_MENU } from './constants'

export function defaultAction (payload) {
  return {
    type: DEFAULT_ACTION,
    payload: payload
  }
}

export function dimNavMenuAction (payload) {
  return {
    type: DIM_NAV_MENU,
    payload
  }
}
