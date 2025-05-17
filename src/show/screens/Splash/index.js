import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {TnB} from '@assets';

const {width} = Dimensions.get('window');

const Splash = () => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.7);

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 1000});
    scale.value = withSpring(1, {damping: 10});
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  return (
    <View style={styles.container}>
      <Animated.Image
        source={TnB}
        resizeMode="contain"
        style={[styles.logo, animatedStyle]}
      />
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
    width: width * 0.5,
    height: width * 0.5,
  },
});

export default Splash;
