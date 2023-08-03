import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParams} from './type';
import {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/Home';

const Stack = createNativeStackNavigator<StackParams>();

const RootNavigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
