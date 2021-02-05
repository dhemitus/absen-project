import { combineReducers } from 'redux'
import userAuthentication from './authentication'
import userProfile from './profile'
import userAttendance from './attendance'

const rootReducer = combineReducers({
  userAuthentication: userAuthentication,
  userProfile: userProfile,
  userAttendance: userAttendance
})
export default rootReducer