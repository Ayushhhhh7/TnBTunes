import { StyleSheet, Platform } from 'react-native';

const ACCENT_MAGENTA = '#DA00FF';
const ACCENT_CYAN = '#00E0FF';
const ACCENT_PINK = '#FF007F';
const PRIMARY_TEXT_BRIGHT = '#FFFFFF';
const SECONDARY_TEXT_MUTED = '#B0A0CF';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  centeredContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  emptyListContainer: {
    paddingTop: 80,
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
  },
  headerTitle: {
    color: ACCENT_MAGENTA,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: ACCENT_CYAN,
    marginTop: 4,
    fontWeight: '500',
  },
  listContentContainer: {
    paddingBottom: 30,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  statusText: {
    marginTop: 16,
    fontSize: 18,
    color: PRIMARY_TEXT_BRIGHT,
    textAlign: 'center',
    fontWeight: '500',
  },
  statusDetailText: {
    color: SECONDARY_TEXT_MUTED,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  errorTitleText: {
    color: ACCENT_PINK,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  errorDetailText: {
    color: PRIMARY_TEXT_BRIGHT,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  retryButton: {
    alignItems: 'center',
    borderRadius: 25,
    elevation: 8,
    justifyContent: 'center',
    paddingHorizontal: 35,
    paddingVertical: 14,
    shadowColor: ACCENT_MAGENTA,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  retryButtonText: {
    color: PRIMARY_TEXT_BRIGHT,
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardGradientColors: ['#3A1F5F', '#2A0F4F'],
});