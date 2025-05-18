import {StyleSheet} from 'react-native';

import {COLORS} from '@theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 30,
    color: COLORS.CYAN,
    fontWeight: 'bold',
  },
  customHeaderTitle: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.MAGENTA,
    textAlign: 'center',
  },
  scrollContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  artwork: {
    width: 240,
    height: 240,
    borderRadius: 12,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: COLORS.CYAN + 'A0',
  },
  trackNameMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
    marginBottom: 6,
  },
  artistName: {
    fontSize: 17,
    color: COLORS.MUTED,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsCard: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 25,
  },
  appleMusicButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 220,
  },
  appleMusicButtonText: {
    color: COLORS.WHITE,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
