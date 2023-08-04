import {Text, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import Logo from '../../assets/svg/logo.svg';
import styles from './SplashScreen.style';

const SplashScreen = () => {
  return (
    <View>
      <ScreenWrapper />
      <View style={styles.wrapper}>
        <Logo />
        <Text style={styles.text}>Doctor Hunt</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
