import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const SongItem = ({item, onPress}) => (
  <TouchableOpacity
    style={styles.songItemOuterContainer}
    onPress={() => onPress(item)}>
    <LinearGradient
      colors={styles.cardBorderGradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.cardBorder}>
      <LinearGradient
        colors={styles.cardGradientColors}
        style={styles.songItemContainer}>
        <Image source={{uri: item.artworkUrl100}} style={styles.artwork} />
        <View style={styles.songInfo}>
          <Text numberOfLines={1} style={styles.trackName}>
            {item.trackName}
          </Text>
          <Text style={styles.artistName} numberOfLines={1}>
            {item.artistName}
          </Text>
          <Text style={styles.collectionName} numberOfLines={1}>
            {item.collectionName || 'Single'}
          </Text>
        </View>
        <Text style={styles.chevron}>›</Text>
      </LinearGradient>
    </LinearGradient>
  </TouchableOpacity>
);

export default SongItem;
