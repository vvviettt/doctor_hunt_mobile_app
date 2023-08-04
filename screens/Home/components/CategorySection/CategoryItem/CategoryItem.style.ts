import {StyleSheet} from 'react-native';
import {colors} from '../../../../../constant/styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: 80,
    height: 90,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  circle: {
    width: 80,
    height: 80,
    position: 'absolute',
    backgroundColor: colors.white,
    opacity: 0.04,
  },
  crb: {
    bottom: -40,
  },
  crr: {
    top: 0,
    right: -40,
  },
});

export default styles;
