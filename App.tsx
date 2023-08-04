/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootNavigation from './config/stack/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './i18n/index';
function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
}

export default App;
