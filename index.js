/**
 * @format
 */
import React from 'react';
import { Provider } from 'react-redux'
import store from './src/redux/store'

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Position from './src/views/pages/position'

function Init () {
  return (
    <Provider store={store}>
      <Position />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => 
  Init
);