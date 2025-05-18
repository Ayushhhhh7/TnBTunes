import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AppNavigator from '@navigator';

const App = () => (
  <SafeAreaView style={styles.safeArea}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
