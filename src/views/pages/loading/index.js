import React from 'react'
import { Block, Text} from 'galio-framework'

import styles from './styles'
import { Themes } from '../../../constants'

export default (props) => {

  return (
    <Block flex style={styles.container}>
      <Block center>
        <Block style={styles.subTitle}>
          <Text color={Themes.COLORS.DEFAULT} size={16}>
            loading...
          </Text>
        </Block>
      </Block>
    </Block>
  )
}