import React from 'react'
import { ImageBackground, Image, Dimensions } from 'react-native'
import { Block } from 'galio-framework'
import { useDispatch } from 'react-redux'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button } from '../../ui'
import { ActionCreators as action } from '../../../redux/actions'

const { height, width } = Dimensions.get("screen");

export default (props) => {
  const dispatch = useDispatch()

  return(
    <Block flex style={styles.container}>
      <Block flex center>
        <ImageBackground source={require('../../../../assets/img/logout.jpg')} style={{ height, width, zIndex: 1 }} />
      </Block>
      <Block center>
        <Image source={require('../../../../assets/img/logo.png')} style={styles.logo} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block center>
            <Button
            color="warning"
            style={styles.button}
              onPress={() => dispatch(action.logoutUser())}
              textStyle={{ color: Themes.COLORS.WHITE }}
            >
              logout
            </Button>            
          </Block>
        </Block>
      </Block>
    </Block>
  )
}