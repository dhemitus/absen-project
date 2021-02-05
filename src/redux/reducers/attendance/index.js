import { 
  USER_ATTENDANCES_GRABBED,
  USER_ATTENDANCES_UNGRABBED,
  USER_ATTENDANCE_GRABBED,
  USER_ATTENDANCE_UNGRABBED,
  USER_ATTENDANCE_INSERTED,
  USER_ATTENDANCE_UNINSERTED,
  USER_ATTENDANCE_DEFAULT,
  USER_ATTENDANCE_CHECKED,
  USER_ATTENDANCE_UNCHECKED
} from './iattendance'

const initalState = {
  type: USER_ATTENDANCE_DEFAULT,
  data: null,
  error: null
}
export default function profileReducer (
  state = initalState,
  action
) {
  switch(action.type) {
    case USER_ATTENDANCES_GRABBED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCES_UNGRABBED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_GRABBED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_UNGRABBED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_INSERTED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_UNINSERTED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_CHECKED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    case USER_ATTENDANCE_UNCHECKED:
      return {
        type: action.type,
        data: action.data,
        error: null
      }
    
    default:
    return state
  }
}