import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Splash} from '@screens';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <Splash />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Songs List will go here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 20},
});

export default App;
