import React from 'react';
import {  Dimensions, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import styles from './styles'

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default (props) => (
  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
    </MapView>
  </View>
)