import { combineReducers } from 'redux'
import userAuthentication from './authentication'
import userProfile from './profile'

const rootReducer = combineReducers({
  userAuthentication: userAuthentication,
  userProfile: userProfile
})
export default rootReducer