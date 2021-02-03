import { UNLOGGED_USER, LOGGED_USER } from './iauthentication'

const initalState = {
  type: UNLOGGED_USER,
  data: null
}

export default function authenticationReducer (
  state = initalState,
  action
) {
  switch(action.type) {
    case LOGGED_USER:
      return {
        type: action.type,
        data: action.payload.data
      }
    default:
      return state
  }
}