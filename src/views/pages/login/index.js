import React from 'react'
import { ImageBackground, Image, Dimensions } from 'react-native'
import { Block, Text} from 'galio-framework'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button, Input } from '../../ui'

const { height, width } = Dimensions.get("screen");

const LoginPage = (props) => {
  return (
    <Block flex style={styles.container}>
      <Block flex center>
        <ImageBackground source={require('../../../../assets/img/background.jpg')} style={{ height, width, zIndex: 1 }} />
      </Block>
      <Block center>
        <Image source={require('../../../../assets/img/logo.png')} style={styles.logo} />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block>
              <Text color="white" size={60}>
                Selamat
              </Text>
            </Block>
            <Block>
              <Text color="white" size={60}>
                Datang
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                Di aplikasi absensi online kerjoo.
              </Text>
            </Block>
          </Block>
          <Block flex style={styles.group}>
            <Block style={styles.inputcontainer}>
              <Input
                right
                placeholder="e-mail"
                style={styles.input}
                iconContent={<Block />}
              />
            </Block>
            <Block style={styles.inputcontainer}>
              <Input
                right
                password={true}
                placeholder="password"
                style={styles.input}
                iconContent={<Block />}
              />
            </Block>

            <Block center>
              <Button
                style={styles.button}
                color={Themes.COLORS.INFO}
                onPress={() => console.log('login')}
                textStyle={{ color: Themes.COLORS.BLACK }}
              >
                login
              </Button>
            </Block>
            
          </Block>
        </Block>
      </Block>
    </Block>
  )
}
export default LoginPage