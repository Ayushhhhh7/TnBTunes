import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const DetailItem = ({label, value, isLast = false}) => (
  <View
    style={[
      styles.detailItemContainer,
      isLast && styles.detailItemContainerLast,
    ]}>
    <Text style={styles.detailLabel}>{label}:</Text>
    <Text numberOfLines={1} style={styles.detailValue}>
      {value.substr(0, 29)}
    </Text>
  </View>
);

export default DetailItem;
