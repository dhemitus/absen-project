import { StyleSheet, Dimensions } from 'react-native';
import { theme} from 'galio-framework'

import { Themes } from '../../../constants'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.COLORS.WHITE
  },
  subTitle: {
    marginTop: height - theme.SIZES.BASE * 6
  },
})

export default styles