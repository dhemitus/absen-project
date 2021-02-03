import { StyleSheet, Dimensions } from 'react-native';
import { theme} from 'galio-framework'

import { Themes } from '../../../constants'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.COLORS.BLACK
  },
  background: {
    height: 400,
    width: 400,
    zIndex: 1
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
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
  button: {
    width: width - theme.SIZES.BASE * 4,
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
    backgroundColor: "#fff"
  }
})

export default styles