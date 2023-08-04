/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParams} from './type';
import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import HomeIcon from '../../assets/svg/home.svg';
import HomeSelectedIcon from '../../assets/svg/home_selected.svg';
import SettingIcon from '../../assets/svg/setting.svg';
import SettingSelectedIcon from '../../assets/svg/setting_selected.svg';
import {colors} from '../../constant/styles/colors';
import {Dimensions, Platform, TouchableOpacity, View} from 'react-native';
import SettingScreen from '../../screens/SettingScreen';
import SplashScreen from '../../screens/SplashScreen';

const Stack = createNativeStackNavigator<StackParams>();
const Tab = createBottomTabNavigator();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Root"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      tabBar={({state, navigation, descriptors}) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width,
              paddingBottom: 20,
              paddingTop: 10,
              paddingHorizontal: 20,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              ...(Platform.OS === 'ios'
                ? {
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                  }
                : {elevation: 5}),
            }}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;
              const {options} = descriptors[route.key];
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? {selected: true} : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}>
                  {options.tabBarIcon!({
                    focused: isFocused,
                    color: '',
                    size: 0,
                  })}
                </TouchableOpacity>
              );
            })}
          </View>
        );
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colors.green,
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeSelectedIcon />
              </View>
            ) : (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeIcon />
              </View>
            ),
          tabBarIconStyle: {
            // marginTop: 5,
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colors.green,
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeSelectedIcon />
              </View>
            ) : (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeIcon />
              </View>
            ),
        }}
        name="Home2"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colors.green,
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeSelectedIcon />
              </View>
            ) : (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HomeIcon />
              </View>
            ),
        }}
        name="Home3"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: colors.green,
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SettingSelectedIcon />
              </View>
            ) : (
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 1000,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SettingIcon />
              </View>
            ),
        }}
        name="Home4"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
