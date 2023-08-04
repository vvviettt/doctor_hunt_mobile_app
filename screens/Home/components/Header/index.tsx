import {Text, View} from 'react-native';
import style from './Header.style';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import TextField from '../../../../components/TextField';
import SearchIcon from '../../../../assets/svg/search.svg';
import ImageNetwork from '../ImageNetwork';
import {CommonStyles} from '../../../../constant/styles/styles';

const Header = () => {
  const errorSource = require('../../../../assets/images/default_avatar.jpeg');
  const {t} = useTranslation();
  return (
    <View style={style.wrapper}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#0ebe7e', '#07d9ad']}
        style={style.gradientBg}>
        <View style={[CommonStyles.flexRow, CommonStyles.spaceBetween]}>
          <View>
            <Text style={style.sayHi}>{t('say_hi')}</Text>
            <Text style={style.headerTitle}>{t('home_title')}</Text>
          </View>
          <View>
            <ImageNetwork
              style={[{width: 60, height: 60}, CommonStyles.borderRadiusFull]}
              url="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*"
              errorSource={errorSource}
            />
          </View>
        </View>
      </LinearGradient>
      <View style={style.searchTextWrapper}>
        <TextField
          prefixIcon={<SearchIcon />}
          placeholder={t('search_input_txt')}
        />
      </View>
    </View>
  );
};

export default Header;
