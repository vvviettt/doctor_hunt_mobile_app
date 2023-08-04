import {StyleSheet} from 'react-native';
import {colors} from '../../constant/styles/colors';
import fonts from '../../constant/styles/fonts';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    height: 54,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.inputBorder,
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  space: {width: 10},
  textField: {
    fontFamily: fonts.Rubik.Regular,
    fontSize: 15,
    fontWeight: '400',
  },
});

export default styles;
