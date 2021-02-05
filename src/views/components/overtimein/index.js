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
    dispatch(action.checkAttendance(5))
  }, [])

  return(
    <Block flex>
    <Button disabled={false} small center color="warning" style={styles.button} onPress={() => dispatch(action.setAttendance(5, date))}>
      {'OVERTIME IN ' + data}
    </Button>
  </Block>
  )
}