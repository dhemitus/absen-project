import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

export const getServerAttendances = async (token) => {
  return await axios({
    method: 'get',
    url: BASE_URL + '/attendances',
    headers:{
      Accept: 'application/json',
      'X-CSRF-TOKEN': 'Bearer ' + token,
      'Authorization': 'Bearer ' + token
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