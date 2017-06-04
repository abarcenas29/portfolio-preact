import { DEFAULT_ACTION } from './constants'

export function defaultAction (payload) {
  return {
    type: DEFAULT_ACTION,
    payload: payload
  }
}
