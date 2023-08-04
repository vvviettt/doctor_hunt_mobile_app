import {View, Image, Dimensions} from 'react-native';
import React from 'react';

const ScreenWrapper = () => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          zIndex: 0,
        }}>
        <View>
          <Image source={require('../../assets/images/top_conner.png')} />
        </View>
      </View>
    </>
  );
};

export default ScreenWrapper;
