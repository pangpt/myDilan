import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai mengakses informasi</Text>
      <Input label="Nomor Telepon" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Lupa Password" size={12} />
      <Gap height={40} />
      <Button title="Masuk" />
      <Gap height={30} />
      <Link title="Buat Akun Baru" size={16} align="center" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: 'white', flex: 1 },
  title: {
    fontSize: 20,
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
