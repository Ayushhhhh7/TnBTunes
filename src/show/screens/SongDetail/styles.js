import {StyleSheet} from 'react-native';

const ACCENT_MAGENTA = '#DA00FF';
const ACCENT_CYAN = '#00E0FF';
const PRIMARY_TEXT_BRIGHT = '#FFFFFF';
const SECONDARY_TEXT_MUTED = '#B0A0CF';
const LABEL_TEXT_COLOR = ACCENT_CYAN;

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
    color: ACCENT_CYAN,
    fontWeight: 'bold',
  },
  customHeaderTitle: {
    marginLeft: 15,
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: ACCENT_MAGENTA,
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
    borderColor: ACCENT_CYAN + 'A0',
  },
  trackNameMain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: PRIMARY_TEXT_BRIGHT,
    textAlign: 'center',
    marginBottom: 6,
  },
  artistName: {
    fontSize: 17,
    color: SECONDARY_TEXT_MUTED,
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
  detailItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: ACCENT_CYAN + '20',
  },
  detailItemContainerLast: {
    borderBottomWidth: 0,
  },
  detailLabel: {
    fontSize: 14,
    color: LABEL_TEXT_COLOR,
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 14,
    color: PRIMARY_TEXT_BRIGHT,
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
    color: PRIMARY_TEXT_BRIGHT,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
