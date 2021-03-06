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
import RoutePage from './src/views/navigation/route'
import { Themes } from './src/constants'

function Init () {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GalioProvider theme={Themes}>
          <Block flex>
            <RoutePage />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => 
  Init
);