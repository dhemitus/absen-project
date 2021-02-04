//import React from 'react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from 'galio-framework'

import { ActionCreators as action } from '../../../redux/actions'
import LoginPage from '../../pages/login'
import LogoutPage from '../../pages/logout'
import ArchivesPage from '../../pages/archives'
import AttendancePage from '../../pages/attendance'
import PositionPage from '../../pages/position'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

HomePage = () => {
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

export default (props) => {
  const { data } = useSelector((state) => state.userAuthentication)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.checkUser())
  }, [])

  return(
    <>
      {data !== '' && data !== undefined && data !== null ? 
        (
          <Stack.Navigator>
            <Stack.Screen name="home" component={HomePage} 
              options={{headerShown: false}}
            />
            <Stack.Screen name="position" component={PositionPage} 
              options={{headerShown: false}}
            />
          </Stack.Navigator>
          )
        :
        (
          <Stack.Navigator>
            <Stack.Screen name="login" component={LoginPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        )
      }
    </>
  )
}