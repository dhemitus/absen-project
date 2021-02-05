import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Geolocation from 'react-native-geolocation-service'
import { PermissionsAndroid } from 'react-native'

const BASE_URL = 'https://apitest.kerjoo.com/api/v1'

export const addLocalUser = async (token) => {
  return await AsyncStorage.setItem('TOKEN', token)
}

export const checkLocalUser = async () => {
  return await AsyncStorage.getItem('TOKEN')
}

export const removeLocalUser = async () => {
  return await AsyncStorage.removeItem('TOKEN')
}

export const serverLogin = async (email, password) => {
  return await axios({
    method: 'post',
    url: BASE_URL + '/auth',
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
}

export const serverLogout = async (token) => {
  await axios({
    method: 'post',
    url: BASE_URL + '/auth/logout',
    headers:{
      Accept: 'application/json',
      'X-CSRF-TOKEN': 'Bearer ' + token,
      'Authorization': 'Bearer ' + token
    },
    responseType: 'json'
  })
}

export const getServerUser = async (token) => {
  return await axios({
    method: 'get',
    url: BASE_URL + '/auth/myprofile',
    headers:{
      Accept: 'application/json',
      'X-CSRF-TOKEN': 'Bearer ' + token,
      'Authorization': 'Bearer ' + token
    },
    responseType: 'json'
  })
}

export const getServerAttendances = async (id, type_id, log_date, page, token) => {
  return await axios({
    method: 'get',
    url: BASE_URL + '/attendances',
    headers:{
      Accept: 'application/json',
      'X-CSRF-TOKEN': 'Bearer ' + token,
      'Authorization': 'Bearer ' + token
    },
    params: {
      id,
      type_id,
      log_date,
      page
    },
    responseType: 'json'
  })
}

export const addServerAttendance = async (type_id, log_date, log_time, longitude, latitude, token) => {
  return await axios({
    method: 'post',
    url: BASE_URL + '/attendances',
    data:{
      type_id,
      log_date,
      log_time,
      longitude,
      latitude
    },
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': 'Bearer ' + token,
      'Authorization': 'Bearer ' + token
    },
    responseType: 'json'
  })
}

export const checkLocalAttendance = async (i) => {
  let _key
  switch (i) {
    case 1:
      _key = 'IN'
      break
    case 2:
      _key = 'OUT'
      break
    case 3:
      _key = 'BREAK'
      break
    case 4:
      _key = 'AFTER_BREAK'
      break
    case 5:
      _key = 'OVERTIME_IN'
      break
    case 6:
      _key = 'OVERTIME_OUT'
      break
    default:
      _key = 'IN'
      break;
  }

  return await AsyncStorage.getItem(_key)
}

export const addLocalAttendance = async (i, record) => {
  let _key
  switch (i) {
    case 1:
      _key = 'IN'
      break
    case 2:
      _key = 'OUT'
      break
    case 3:
      _key = 'BREAK'
      break
    case 4:
      _key = 'AFTER_BREAK'
      break
    case 5:
      _key = 'OVERTIME_IN'
      break
    case 6:
      _key = 'OVERTIME_OUT'
      break
    default:
      _key = 'IN'
      break;
  }
  return await AsyncStorage.setItem(_key, record)
}

export const getPosition = async (onSuccess, onError) => {
  let _permission

  _permission = await permission()

  return Geolocation.getCurrentPosition(
    onSuccess,
    onError,
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  )
}

const permission = async () => {
  let _permission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)

  if(_permission) return true

  let _status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)

  if(_status === PermissionsAndroid.RESULTS.GRANTED) return true

  return false
}