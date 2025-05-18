import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
} from 'react-native-reanimated';
import {View} from 'react-native';
import React, {useEffect} from 'react';

import {TnB} from '@assets/images';

import styles from './styles';

const Splash = ({navigation}) => {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withTiming(1, {duration: 400});
    scale.value = withSequence(
      withTiming(1, {duration: 500}),
      withTiming(0.8, {duration: 500}),
      withTiming(1, {duration: 500}),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SongsList');
    }, 2000);
  }, []);

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

export default Splash;
