import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconBackDark } from '../../../assets';
import { Gap, Button } from '../../atoms';
import { colors } from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" />
      <Text style={styles.text}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    color: colors.text.primary,
  },
});
