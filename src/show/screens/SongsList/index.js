import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState, useCallback} from 'react';

import {SongItem} from '@components';

import styles from './styles';

const API_URL = 'https://itunes.apple.com/search?term=Michael+jackson';

const ACCENT_CYAN = '#00E0FF';
const ACCENT_PINK = '#FF007F';
const ACCENT_MAGENTA = '#DA00FF';
const BG_GRADIENT_COLORS = ['#2A254D', '#1D0033', '#2F004D'];

const INITIAL_DISPLAY_COUNT = 10;

const SongList = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchSongs = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const tracksList = data.results.filter(
        item => item.kind === 'song' && item.trackName && item.artworkUrl100,
      );
      setSongs(tracksList);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      console.error('API fetch failed:', err);
      setError(err.message || 'Network error occurred');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchSongs();
  };

  const handleSongPress = song => {
    console.log('Navigate to detail for:', song.trackName);
    navigation?.navigate('SongDetail', { songData: song });
  };

  if (isLoading) {
    return (
      <LinearGradient
        colors={BG_GRADIENT_COLORS}
        style={styles.centeredContainer}>
        <ActivityIndicator size="large" color={ACCENT_CYAN} />
        <Text style={styles.statusText}>Loading TnBTunes...</Text>
      </LinearGradient>
    );
  }

  if (error && !songs.length) {
    return (
      <LinearGradient
        colors={BG_GRADIENT_COLORS}
        style={styles.centeredContainer}>
        <Text style={styles.errorTitleText}>Connection Failed</Text>
        <Text style={styles.errorDetailText}>{error}</Text>
        <TouchableOpacity onPress={() => fetchSongs()} activeOpacity={0.7}>
          <LinearGradient
            colors={[ACCENT_PINK, ACCENT_MAGENTA]}
            style={styles.retryButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text style={styles.retryButtonText}>Retry</Text>
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={BG_GRADIENT_COLORS}
      style={styles.container}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>TNBTUNES</Text>
        <Text style={styles.headerSubtitle}>Michael Jackson Hits</Text>
      </View>

      <FlatList
        data={songs}
        renderItem={({item}) => (
          <SongItem item={item} onPress={handleSongPress} />
        )}
        keyExtractor={item => item.trackId?.toString()}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
        initialNumToRender={INITIAL_DISPLAY_COUNT}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyListContainer}>
            <Text style={styles.statusText}>No tracks found</Text>
            <Text style={styles.statusDetailText}>Pull down to refresh</Text>
          </View>
        }
      />
    </LinearGradient>
  );
};

export default SongList;
