import { USER_PROFILE_GRABBED, USER_PROFILE_UNGRABBED } from './iprofile'

const initalState = {
  type: USER_PROFILE_UNGRABBED,
  data: null,
  error: null
}
export default function profileReducer (
  state = initalState,
  action
) {
  switch(action.type) {
    case USER_PROFILE_GRABBED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
      case USER_PROFILE_UNGRABBED:
        return {
          type: action.type,
          data: action.data,
          error: null
        }
      default:
      return state
  }
}