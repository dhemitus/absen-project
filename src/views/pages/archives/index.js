import React from 'react'
import { Block, Text} from 'galio-framework'
import { useSelector, useDispatch } from 'react-redux'

import { ActionCreators as action } from '../../../redux/actions'
import { Button } from '../../ui'


export default (props) => {
//  const { data } = useSelector((state) => state.userAuthentication)
//  const dispatch = useDispatch()
let { navigation } = props

//  React.useEffect(() => {
//    dispatch(action.checkUser())
//  }, [])

  return(
    <Block>
      <Text>archives</Text>
      <Button onPress={() => navigation.navigate('position')}>change</Button>
    </Block>
  )
}