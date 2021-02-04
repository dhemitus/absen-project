import React, { useState, useEffect } from 'react'
import { Block} from 'galio-framework'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { Button } from '../../ui'
import styles from './styles'

export default (props) => {
  let { date } = props

  return(
    <Block flex>
    <Button disabled={false} small center color="default" style={styles.button} onPress={() => console.log(date)}>
      IN
    </Button>
  </Block>
  )
}