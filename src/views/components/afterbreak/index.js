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
    dispatch(action.checkAttendance(4))
  }, [])

  return(
    <Block flex>
    <Button disabled={ data === null ? false : true } small center color={ data === null ? "success" : "default" } style={styles.button} onPress={ () => data === null ? dispatch(action.setAttendance(4, date)) : {} }>
      AFTER BREAK
    </Button>
  </Block>
  )
}