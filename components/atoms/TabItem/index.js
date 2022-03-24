import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  IconOfficer,
  IconMessages,
  IconCourts,
  IconOfficerActive,
  IconMessagesActive,
  IconCourtsActive,
} from '../../../assets';
import { colors } from '../../../utils';

export default function TabItem({ title, active, onPress, onLongPress }) {
  const Icon = () => {
    if (title === 'Petugas') {
      return active ? <IconOfficerActive /> : <IconOfficer />;
    }
    if (title === 'Pesan') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Pengadilan') {
      return active ? <IconCourtsActive /> : <IconCourts />;
    }
    return <IconOfficer />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    marginTop: 4,
  }),
});
