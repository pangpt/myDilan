import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { ILGetStarted, ILLogo } from '../../assets';
import { Button } from '../../components';

export default function GetStarted({ navigation }) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Akses informasi di Pengadilan jadi lebih mudah & cepat
        </Text>
      </View>
      <View>
        <Button title="Mulai" onPress={() => navigation.navigate('Register')} />
        <View style={{ height: 16 }} />
        <Button
          type="secondary"
          title="Masuk"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: { padding: 40, justifyContent: 'space-between', flex: 1 },
  title: { fontSize: 28, fontWeight: '600', color: 'white', marginTop: 91 },
});
