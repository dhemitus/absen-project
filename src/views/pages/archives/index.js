import React from 'react'
import { Block, Text} from 'galio-framework'
import { useSelector, useDispatch } from 'react-redux'

import { ActionCreators as action } from '../../../redux/actions'


export default (props) => {
//  const { data } = useSelector((state) => state.userAuthentication)
//  const dispatch = useDispatch()

//  React.useEffect(() => {
//    dispatch(action.checkUser())
//  }, [])

  return(
    <Block>
      <Text>archives</Text>
    </Block>
  )
}