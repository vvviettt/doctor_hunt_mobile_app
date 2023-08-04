import {View} from 'react-native';
import Header from './components/Header';
import {CommonStyles} from '../../constant/styles/styles';
import CategorySection from './components/CategorySection';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <View style={[CommonStyles.h50]} />
      <CategorySection />
    </View>
  );
};

export default HomeScreen;
