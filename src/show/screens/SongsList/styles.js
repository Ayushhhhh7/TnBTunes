import {StyleSheet} from 'react-native';

import {COLORS} from '@theme';

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
    paddingTop: 40,
  },
  headerTitle: {
    color: COLORS.MAGENTA,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.CYAN,
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
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: '500',
  },
  statusDetailText: {
    color: COLORS.MUTED,
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  errorTitleText: {
    color: COLORS.PINK,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  errorDetailText: {
    color: COLORS.WHITE,
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
    shadowColor: COLORS.MAGENTA,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  retryButtonText: {
    color: COLORS.WHITE,
    fontSize: 17,
    fontWeight: 'bold',
  },
  cardGradientColors: COLORS.CARD_GRADIENT,
});
