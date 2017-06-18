import { SWITCH_TO_LINK } from './constants'

export function SwitchToLinkAction (payload) {
  return {
    type: SWITCH_TO_LINK,
    payload
  }
}
