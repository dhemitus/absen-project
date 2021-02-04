import React, { useState, useEffect } from 'react'
import { Block, Text} from 'galio-framework'
import { ImageBackground, Image, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button, Input } from '../../ui'
import { ActionCreators as action } from '../../../redux/actions'

const { height, width } = Dimensions.get("screen");
const idlocal = require('moment/locale/id')

export default (props) => {
  const [date, setDate] = useState(new Date())
  //  const { data } = useSelector((state) => state.userAuthentication)
//  const dispatch = useDispatch()

  useEffect(() => {
    let _timer = setInterval(() => _tick(), 1000)

    return () => {
      clearInterval(_timer)
    }
  }, [])

  _tick = () => {
    setDate(new Date())
  }

  return(
    <Block flex style={styles.container}>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block style={styles.title}>
            <Block style={styles.subTitle}>
              <Text color={Themes.COLORS.DEFAULT} size={18}>
                {moment(date).format("LL")}
              </Text>
            </Block>
            <Block>
              <Text color={Themes.COLORS.PRIMARY} size={52}>
                {/*date.toLocaleTimeString()*/}
                {moment(date).format("LTS")}
              </Text>
            </Block>
          </Block>
        </Block>
        <Block row space="evenly">
            <Block flex>
              <Button small center color="default" style={styles.optionsButton}>
                in
              </Button>
            </Block>

            <Block flex>
              <Button small center color="primary" style={styles.optionsButton}>
                out
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block flex>
              <Button center color="info" style={styles.optionsButton}>
                break
              </Button>
            </Block>

            <Block flex>
              <Button center color="success" style={styles.optionsButton}>
                after break
              </Button>
            </Block>
          </Block>
          <Block row space="evenly">
            <Block flex>
              <Button small center color="warning" style={styles.optionsButton}>
                overtime in
              </Button>
            </Block>
            <Block flex>
              <Button small center color="error" style={styles.optionsButton}>
                overtime out
              </Button>
            </Block>
          </Block>
      </Block>
    </Block>
  )
}