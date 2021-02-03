import { UNLOGGED_USER, LOGGED_USER, STILLLOGGED_USER } from './iauthentication'

const initalState = {
  type: UNLOGGED_USER,
  data: null,
  error: null
}

export default function authenticationReducer (
  state = initalState,
  action
) {
  switch(action.type) {
    case LOGGED_USER:
      return {
        type: action.type,
        data: action.payload.data,
        error: null
      }
      case STILLLOGGED_USER:
        return {
          type: action.type,
          data: action.payload.data,
          error: null
        }
      default:
      return state
  }
}