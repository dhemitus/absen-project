import { LOGGED_USER, UNLOGGED_USER, STILLLOGGED_USER } from '../../reducers/authentication/iauthentication'
import * as api from '../../../api'

export const emailLogin = (email, password) => async dispatch => {
  try {
    let _response = await api.serverLogin(email, password)
    console.log(_response.data.access_token)

    let _result = (_response.data)
    console.log(_result)

    await api.addLocalUser(_result.access_token)

    dispatch({
      type: LOGGED_USER,
      data: _result
    })
  } catch( e) {
    dispatch({
      type: UNLOGGED_USER,
      data: e
    })
  }
}

export const logoutUser = () => async dispatch => {
  try {
    let _token = await api.checkLocalUser()

    console.log(_token)
    await api.serverLogout(_token)

    await api.removeLocalUser()

    dispatch({
      type: UNLOGGED_USER,
      data: null
    })
  } catch(e) {
    console.log(e)
  }
}

export const checkUser = () => async dispatch => {
  try {

    let _result = await api.checkLocalUser()

    if(_result !== null) {
      dispatch({
        type: STILLLOGGED_USER,
        data: _result
      })  
    } else {
      dispatch({
        type: UNLOGGED_USER,
        data: null
      })
    }

  }catch(e) {
    dispatch({
      type: UNLOGGED_USER,
      data: e
    })
  }
}