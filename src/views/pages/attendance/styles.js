import { StyleSheet, Dimensions } from 'react-native';
import { theme} from 'galio-framework'

import { Themes } from '../../../constants'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.COLORS.WHITE
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingTop:theme.SIZES.BASE * 12,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
  },
  button: {
    width: width - theme.SIZES.BASE * 6,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  inputcontainer:{
    paddingHorizontal: theme.SIZES.BASE
  },
  input: {
    borderColor: Themes.COLORS.INFO,
    borderRadius: 4,
//    backgroundColor: "#fff"
  }
})

export default styles