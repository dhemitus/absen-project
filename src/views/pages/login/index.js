import React from 'react'
import { ImageBackground, Image, Dimensions, ScrollView,} from 'react-native'
import { Block, Text} from 'galio-framework'
import { useDispatch } from 'react-redux'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button, Input } from '../../ui'
import { ActionCreators as action } from '../../../redux/actions'

const { height, width } = Dimensions.get("screen");

export default (props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const dispatch = useDispatch()

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
                welcome
              </Text>
            </Block>
            <Block>
              <Text color="white" size={60}>
                to
              </Text>
            </Block>
            <Block style={styles.subTitle}>
              <Text color="white" size={16}>
                online attendance application system kerjoo.
              </Text>
            </Block>
          </Block>
          <Block flex style={styles.group}>
            <Block style={styles.inputcontainer}>
              <Input
                value={email}
                onChangeText={setEmail}
                right
                placeholder="e-mail"
                style={styles.input}
                iconContent={<Block />}
              />
            </Block>
            <Block style={styles.inputcontainer}>
              <Input
                value={password}
                onChangeText={setPassword}
                right
                password={true}
                placeholder="password"
                style={styles.input}
                iconContent={<Block />}
              />
            </Block>

            <Block center>
              <Button
              color="success"
              style={styles.button}
                onPress={() => dispatch(action.emailLogin(email, password))}
                textStyle={{ color: Themes.COLORS.WHITE }}
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