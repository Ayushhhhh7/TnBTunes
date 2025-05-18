import { StyleSheet } from 'react-native';

const ACCENT_CYAN = '#00E0FF';
const PRIMARY_TEXT_BRIGHT = '#FFFFFF';
const LABEL_TEXT_COLOR = ACCENT_CYAN;

export default StyleSheet.create({
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
});