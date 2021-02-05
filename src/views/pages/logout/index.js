import React, { useEffect } from 'react'
import { ImageBackground, Image, Dimensions } from 'react-native'
import { Block, Text } from 'galio-framework'
import { useSelector, useDispatch } from 'react-redux'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button } from '../../ui'
import { ActionCreators as action } from '../../../redux/actions'

const { height, width } = Dimensions.get("screen");

export default (props) => {
  const { data } = useSelector((state) => state.userProfile)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.userProfile())
  }, [])

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
          <Block flex style={styles.profileCard}>
            {data !== [] && data !== undefined && data !== null &&
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    {data.name}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    {data.email}
                  </Text>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
              </Block>
            }
            <Block center>
              <Button
              color="secondary"
              style={styles.button}
                onPress={() => dispatch(action.logoutUser())}
                textStyle={{ color: Themes.COLORS.BLACK }}
              >
                logout
              </Button>            
            </Block>

          </Block>
        </Block>
      </Block>
    </Block>
  )
}