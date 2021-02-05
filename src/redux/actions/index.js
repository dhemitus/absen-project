import * as AuthenticationAction from './authentication'
import * as Profile from './profile'
import * as Attendance from './attendance'

export const ActionCreators = Object.assign({},
  AuthenticationAction,
  Profile,
  Attendance
)