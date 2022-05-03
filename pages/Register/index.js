import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Header, Input, Button, Gap, Loading } from '../../components';
import { colors, storeData, useForm, showError } from '../../utils';
import { Fire } from '../../config';

export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullName: '',
    category: 'informasi perkara',
    str_number: '',
    gender: 'pria',
    email: '',
    password: '',
  });

  const [itemCategory] = useState([
    {
      id: 1,
      label: 'Informasi Perkara',
      value: 'informasi perkara',
    },
    {
      id: 2,
      label: 'Informasi Akta Cerai',
      value: 'informasi akta cerai',
    },
    {
      id: 3,
      label: 'Informasi Sidang',
      value: 'informasi sidang',
    },
    {
      id: 4,
      label: 'Informasi Sarana',
      value: 'informasi sarana',
    },
    {
      id: 5,
      label: 'Informasi Umum',
      value: 'informasi umum',
    },
  ]);

  const [itemGender] = useState([
    {
      id: 1,
      label: 'Pria',
      value: 'pria',
    },
    {
      id: 2,
      label: 'Wanita',
      value: 'wanita',
    },
  ]);

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email + '@gmail.com', form.password)
      .then((success) => {
        // Signed in
        setLoading(false);
        setForm('reset');
        //https://firebase.com/users/i39d2doif/
        const data = {
          fullName: form.fullName,
          category: form.category,
          email: form.email,
          gender: form.gender,
          rate: 0,
          str_number: form.str_number,
          uid: success.user.uid,
        };
        Fire.database().ref(`officers/${success.user.uid}/`).set(data);

        storeData('user', data);
        navigation.navigate('MainApp', data);
      })
      .catch((err) => {
        setLoading(false);
        showError(err.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Gap height={40} />
            <Input
              label="Posisi"
              value={form.category}
              onValueChange={(value) => setForm('category', value)}
              select
              selectItem={itemCategory}
            />
            <Gap height={40} />
            <Input
              label="Jenis Kelamin"
              value={form.gender}
              onValueChange={(value) => setForm('gender', value)}
              select
              selectItem={itemGender}
            />
            <Gap height={40} />
            <Input
              label="Username"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={40} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
            <Button title="Selanjutnya" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  content: { padding: 40, paddingTop: 0, flex: 1 },
  page: { backgroundColor: colors.white, flex: 1 },
});
