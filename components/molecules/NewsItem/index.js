import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../utils';
import { DummyNews1 } from '../../../assets';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Penyerahan Penghargaan Zona Integritas dari MenpanRB
        </Text>
        <Text style={styles.date}>Hari ini</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: '90%',
  },
  titleWrapper: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
