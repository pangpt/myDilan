import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header, Input, Button, Gap } from '../../components';
import { colors } from '../../utils';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Input label="Nama Lengkap" />
        <Gap height={40} />
        <Input label="Kategori Kelompok Rentan" />
        <Gap height={40} />
        <Input label="Nomor Telepon" />
        <Gap height={40} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Selanjutnya" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 40, paddingTop: 0 },
  page: { backgroundColor: colors.white, flex: 1 },
});
