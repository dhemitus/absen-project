import React, { useState, useEffect } from 'react'
import { Block} from 'galio-framework'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { Button } from '../../ui'
import styles from './styles'
import { ActionCreators as action } from '../../../redux/actions'

export default (props) => {
  let { date } = props
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.userAttendance)

  useEffect(() => {
    dispatch(action.checkAttendance(2))
  }, [])

  return(
    <Block flex>
    <Button disabled={false} small center color="primary" style={styles.button} onPress={() => dispatch(action.setAttendance(2, date))}>
      {'OUT ' + data}
    </Button>
  </Block>
  )
}