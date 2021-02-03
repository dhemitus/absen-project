import { combineReducers } from 'redux'
import userAuthentication from './authentication'

const rootReducer = combineReducers({
    userAuthentication: userAuthentication
})
export default rootReducer