//import FormData from 'FormData'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { LOGGED_USER, UNLOGGED_USER, STILLLOGGED_USER } from '../../reducers/authentication/iauthentication'

export const emailLogin = (email, password) => async dispatch => {
  try {
    let _response = await axios({
      method: 'post',
      url:'https://apitest.kerjoo.com/api/v1/auth',
      data:{
        email,
        password
      },
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': ''
      },
      responseType: 'json'
    })
    console.log(_response.data.access_token)

    let _result = (_response.data)
    console.log(_result)

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