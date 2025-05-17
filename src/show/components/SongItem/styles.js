import { StyleSheet } from 'react-native';

const ACCENT_CYAN = '#00E0FF';
const PRIMARY_TEXT_BRIGHT = '#FFFFFF';
const SECONDARY_TEXT_MUTED = '#B0A0CF';

export default StyleSheet.create({
  songItemOuterContainer: {
    borderRadius: 12,
    elevation: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardBorder: {
    borderRadius: 12,
    padding: 2,
  },
  songItemContainer: {
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    padding: 12,
  },
  artwork: {
    borderColor: `${ACCENT_CYAN}77`,
    borderRadius: 8,
    borderWidth: 1,
    height: 70,
    marginRight: 15,
    width: 70,
  },
  songInfo: {
    flex: 1,
  },
  trackName: {
    color: PRIMARY_TEXT_BRIGHT,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artistName: {
    color: SECONDARY_TEXT_MUTED,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 3,
  },
  collectionName: {
    color: SECONDARY_TEXT_MUTED,
    fontSize: 10,
    fontStyle: 'italic',
  },
  chevron: {
    color: PRIMARY_TEXT_BRIGHT,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardGradientColors: ['#3A1F5F', '#2A0F4F'],
  cardBorderGradient: ['#DA00FF', '#00E0FF', '#FF007F'],
});