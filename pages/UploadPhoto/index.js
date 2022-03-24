import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button, Header, Link, Gap } from '../../components';
import { IconAddPhoto, ILNullPhoto } from '../../assets';
import { colors } from '../../utils';

export default function UploadPhoto({ navigation }) {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Unggah Foto" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={{ ILNullPhoto }} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Dilan</Text>
          <Text style={styles.profession}>Information Deliver</Text>
        </View>
        <View>
          <Button title="Unggah dan Lanjutkan" />
          <Gap height={30} />
          <Link title="Lewatkan" align="center" size={16} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: { width: 110, height: 100 },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  page: { flex: 1, backgroundColor: colors.white },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
    justifyContent: 'space-between',
  },
  content: {
    paddingHorizontal: 40,
    flex: 1,
    paddingBottom: 40,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
