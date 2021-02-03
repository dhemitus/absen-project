import FormData from 'FormData'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LOGGED_USER, UNLOGGED_USER, STILLLOGGED_USER } from '../../reducers/authentication/iauthentication'

export const emailLogin = (email, password) => async dispatch => {
  let _data = FormData()
  _data.append(email)
  _data.append(password)
  try {
    let _response = await fetch(
      'https://apitest.kerjoo.com/api/v1/auth',
      {
        method: 'POST'
      },
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-CSRF-TOKEN': ''
        },
        body: _data
      },
    )

    let _result = await _response.json()

    await AsyncStorage.setItem('TOKEN', _result.access_token)

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

export const checkUser = () => async dispatch => {
  try {

    let _result = await AsyncStorage.getItem('TOKEN')

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