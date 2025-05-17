import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import {TnB} from '@assets';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={TnB} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
});

export default Splash;
