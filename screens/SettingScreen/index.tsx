import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';

const SettingScreen = () => {
  return (
    <View>
      <ScreenWrapper />
      <ScrollView>
        <View style={{height: 2000}}></View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
