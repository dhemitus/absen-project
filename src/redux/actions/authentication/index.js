import FormData from 'FormData'

import { LOGGED_USER, UNLOGGED_USER } from '../../reducers/authentication/iauthentication'

export const emailLogin = (email, password) => async dispatch => {
  var _data = FormData()
  _data.append(email)
  _data.append(password)
  try {
    result = await fetch(
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
    dispatch({
      type: LOGGED_USER,
      data: null
    })
  } catch( e) {
    dispatch({
      type: UNLOGGED_USER,
      data: e
    })
  }
}