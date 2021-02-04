import React, { useState, useEffect } from 'react'
import { Block, Text} from 'galio-framework'
import { ImageBackground, Image, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import styles from './styles'
import { Themes } from '../../../constants'
import { Button, Input } from '../../ui'
import { ActionCreators as action } from '../../../redux/actions'
import { InButton, OutButton, BreakButton, AfterBreakButton, OverTimeInButton, OverTimeOutButton } from '../../components'

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
                {moment(date).format("LTS")}
              </Text>
            </Block>
          </Block>
        </Block>
        <Block row space="evenly">
          <InButton date={date} />
          <OutButton date={date} />
        </Block>
        <Block row space="evenly">
          <BreakButton date={date} />
          <AfterBreakButton date={date} />
        </Block>
        <Block row space="evenly">
          <OverTimeInButton date={date} />
          <OverTimeOutButton date={date} />
        </Block>
      </Block>
    </Block>
  )
}