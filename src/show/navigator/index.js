import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Splash, SongsList, SongDetail} from '@screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SongsList" component={SongsList} />
      <Stack.Screen name="SongDetail" component={SongDetail} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
