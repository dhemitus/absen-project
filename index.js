/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { Block, GalioProvider } from "galio-framework"
import { NavigationContainer } from "@react-navigation/native"

import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import Position from './src/views/pages/position'
import LoginPage from './src/views/pages/login'
import { Themes } from './src/constants'

function Init () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GalioProvider theme={Themes}>
          <Block flex>
            <LoginPage />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => 
  Init
);