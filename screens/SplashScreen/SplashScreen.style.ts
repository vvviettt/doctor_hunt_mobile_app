import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../constant/styles/fonts';

const styles = StyleSheet.create({
  wrapper: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 15,
    fontFamily: fonts.Rubik.Bold,
    fontSize: 25,
    color: '#222222',
  },
});

export default styles;
