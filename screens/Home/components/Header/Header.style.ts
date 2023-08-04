import {Dimensions, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import fonts from '../../../../constant/styles/fonts';
import {colors} from '../../../../constant/styles/colors';

const style = StyleSheet.create({
  wrapper: {
    height: 156,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    position: 'relative',
    zIndex: 1000,
  },
  gradientBg: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 20,
  },
  sayHi: {
    fontFamily: fonts.Rubik.Regular,
    fontSize: 20,
    letterSpacing: -0.3,
    color: colors.whiteBlur,
  },
  headerTitle: {
    fontFamily: fonts.Rubik.Bold,
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
    marginTop: 5,
  },
  searchTextWrapper: {
    position: 'absolute',
    bottom: -27,
    zIndex: 100,
    left: 20,
    width: Dimensions.get('window').width - 40,
  },
});
export default style;
