import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { DummyOfficer1, IconStar } from '../../../assets';
import { colors } from '../../../utils';

export default function RatedInformation() {
  return (
    <View style={styles.container}>
      <Image source={DummyOfficer1} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>Pak Dilan</Text>
        <Text style={styles.category}>Informasi Akta Cerai</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  profile: {
    flex: 1,
  },
  rate: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    color: colors.text.primary,
  },
  category: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2,
  },
});
