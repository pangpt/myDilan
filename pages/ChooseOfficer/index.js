import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header, ListOfficer } from '../../components';
import { DummyOfficer1, DummyOfficer2 } from '../../assets';
import { colors } from '../../utils';
import { NavigationContainer } from '@react-navigation/native';

export default function ChooseOfficer({ navigation }) {
  return (
    <View style={styles.apge}>
      <Header
        type="dark"
        title="Pilih Petugas Informasi"
        onPress={() => navigation.goBack()}
      />
      <ListOfficer
        type="next"
        profile={DummyOfficer1}
        name="Pak Dilan"
        desc="Pria"
        onPress={() => navigation.navigate('Chatting')}
      />
      <ListOfficer
        type="next"
        profile={DummyOfficer2}
        name="Bu Agung"
        desc="Wanita"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
