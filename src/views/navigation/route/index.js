//import React from 'react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from 'galio-framework'

import { ActionCreators as action } from '../../../redux/actions'
import { LOGGED_USER, STILLLOGGED_USER, UNLOGGED_USER } from '../../../redux/reducers/authentication/iauthentication'
import LoginPage from '../../pages/login'
import LogoutPage from '../../pages/logout'
import ArchivesPage from '../../pages/archives'
import AttendancePage from '../../pages/attendance'
import PositionPage from '../../pages/position'
import LoadingPage from '../../pages/loading'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let _iconname
          if(route.name === 'home') {
            _iconname = focused ? 'pin-3' : 'pin-3'
          } else if(route.name === 'attendance') {
            _iconname = focused ? 'pin-3' : 'pin-3'
          } else if(route.name === 'archives') {
            _iconname = focused ? 'pin-3' : 'pin-3'
          } else if(route.name === 'logout') {
            _iconname = focused ? 'pin-3' : 'pin-3'
          }
          return <Icon name={_iconname} family='Galio' size={size} color={color} />
        }
      })}
    >
      <Tab.Screen name="attendance" component={AttendancePage} />
      <Tab.Screen name="archives" component={ArchivesPage} />
      <Tab.Screen name="logout" component={LogoutPage} />
    </Tab.Navigator>
  )
}

const DisplayPage = (type) => {

  if(type === LOGGED_USER || type === STILLLOGGED_USER) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomePage} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="position" component={PositionPage} 
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    )
  } else if (type === UNLOGGED_USER) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    )
  } else {
    return (
      <LoadingPage />
    )
  }
}

export default (props) => {
  const { data, type } = useSelector((state) => state.userAuthentication)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.checkUser())
  }, [])

  return(
    <>
    { DisplayPage(type) }
    </>
  )
}