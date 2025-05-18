import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { DetailItem } from '@components';
import { formatDate,formatTrackTime } from '@helpers';

import styles from './styles';

const BG_GRADIENT_COLORS = ['#0B001A', '#1D0033', '#2F004D'];
const CARD_GRADIENT_COLORS = ['#3A1F5F', '#2A0F4F'];
const ACCENT_MAGENTA = '#DA00FF';
const ACCENT_PINK = '#FF007F';

const SongDetail = ({route, navigation}) => {
  const {songData} = route.params || {};

  const openTrackUrl = () => {
    if (songData.trackViewUrl) {
      Linking.openURL(songData.trackViewUrl).catch(err =>
        console.error('Failed to open URL:', err),
      );
    }
  };

  return (
    <LinearGradient colors={BG_GRADIENT_COLORS} style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.customHeader}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>‹</Text>
          </TouchableOpacity>
          <Text style={styles.customHeaderTitle}>
            {songData.trackName || 'Details'}
          </Text>
          <View style={{width: 40}} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Image
            source={{uri: songData.artworkUrl100}}
            style={styles.artwork}
            resizeMode="cover"
          />

          <Text style={styles.trackNameMain}>
            {songData.trackName || 'Unknown Track'}
          </Text>
          <Text style={styles.artistName}>
            {songData.artistName || 'Unknown Artist'}
          </Text>

          <LinearGradient
            colors={CARD_GRADIENT_COLORS}
            style={styles.detailsCard}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <DetailItem
              label="Album"
              value={songData.collectionName || 'N/A'}
            />
            <DetailItem
              label="Genre"
              value={songData.primaryGenreName || 'N/A'}
            />
            <DetailItem
              label="Released"
              value={formatDate(songData.releaseDate)}
            />
            <DetailItem
              label="Duration"
              value={formatTrackTime(songData.trackTimeMillis)}
            />
            {songData.trackPrice && (
              <DetailItem
                label="Price"
                value={`${songData.trackPrice} ${songData.currency || ''}`}
                isLast
              />
            )}
          </LinearGradient>

          {songData.trackViewUrl && (
            <TouchableOpacity onPress={openTrackUrl} activeOpacity={0.7}>
              <LinearGradient
                colors={[ACCENT_PINK, ACCENT_MAGENTA]}
                style={styles.appleMusicButton}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Text style={styles.appleMusicButtonText}>
                  View on Apple Music
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SongDetail;