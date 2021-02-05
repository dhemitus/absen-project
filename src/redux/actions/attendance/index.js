import moment from 'moment'
import * as api from '../../../api'

import { 
  USER_ATTENDANCE_CHECKED,
  USER_ATTENDANCE_UNCHECKED,
  USER_ATTENDANCES_GRABBED,
  USER_ATTENDANCES_UNGRABBED,
  USER_ATTENDANCE_GRABBED,
  USER_ATTENDANCE_UNGRABBED,
  USER_ATTENDANCE_INSERTED,
  USER_ATTENDANCE_UNINSERTED
} from '../../reducers/attendance/iattendance'

export const checkAttendance = (type) => async dispatch => {
  try {
    let _attendace = await api.checkLocalAttendance(type)
    let _array = JSON.parse(_attendace)
    let _date = _array.find( r => r === moment().format("Y-M-d"))

    console.log(_date)
    if(_date === undefined) {
      dispatch({
        type: USER_ATTENDANCE_UNCHECKED,
        data: null,
        error: 'undefined'
      })
    } else {
      dispatch({
        type: USER_ATTENDANCE_CHECKED,
        data: _result.data,
        error: null
      })
  
    }

  } catch (e) {
    dispatch({
      type: USER_ATTENDANCE_UNCHECKED,
      data: null,
      error: e
    })
  }
}

export const setAttendance = (type, date) => async dispatch => {
  try {
    let _token = await api.checkLocalUser()
    let _record = await api.checkLocalAttendance(type)
    let _array

    _onSuccess = async (pos) => {
      console.log(_token)
      console.log(_record === null ? 'kosong' : _record)
      console.log(type, moment(date).format("Y-M-d"), moment(date).format("H:m:s"), pos.coords.longitude, pos.coords.latitude)

      let _response = await api.addServerAttendance(type, moment(date).format("Y-M-d"), moment(date).format("H:m:s"), pos.coords.longitude+'', pos.coords.latitude+'', _token )

      console.log(_response.data)

      if(_record === null) {
        _array = [moment(date).format("Y-M-d")]
      } else {
        _array = JSON.parse(_record)
        _array.push(moment(date).format("Y-M-d"))
      }
      _record = JSON.stringify(_array)
      let _result = await addLocalAttendance(type, _record)

      dispatch({
          type: USER_ATTENDANCE_INSERTED,
          data: _result,
          error: null
        })
      }
    _onError = (e) => {
      dispatch({
        type: USER_ATTENDANCE_UNINSERTED,
        data: null,
        error: e
      })
    console.log(e)
    }
    api.getPosition(_onSuccess, _onError)

  } catch(e) {
    dispatch({
      type: USER_ATTENDANCE_UNINSERTED,
      data: null,
      error: e
    })
console.log(e)
  }
}

export const getAttendances = (id, type, date, page) => async dispatch => {
  try {
    let _token = await api.checkLocalUser()
    let _response = await api.getServerAttendances(id, type, date, page,_token)

    dispatch({
      type: USER_ATTENDANCES_GRABBED,
      data: _response.data,
      error: null
    })
  } catch(e) {
    dispatch({
      type: USER_ATTENDANCES_UNGRABBED,
      data: null,
      error: e
    })
  }
}