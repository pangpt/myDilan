import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ListOfficer } from '../../components';
import { colors } from '../../utils';
import { DummyOfficer1, DummyOfficer2, DummyOfficer3 } from '../../assets';

export default function Messages() {
  const [officers, setOfficers] = useState([
    {
      id: 1,
      profile: DummyOfficer1,
      name: 'Pak Dilan',
      desc: 'Terima kasih kemba...',
    },
    {
      id: 2,
      profile: DummyOfficer2,
      name: 'Bu Agung',
      desc: 'Terima kasih kemba...',
    },
    {
      id: 3,
      profile: DummyOfficer3,
      name: 'Pak Adil',
      desc: 'Terima kasih kemba...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Pesan</Text>
        {officers.map((officer) => {
          return (
            <ListOfficer
              key={officer.id}
              profile={officer.profile}
              name={officer.name}
              desc={officer.desc}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    // borderBottomLeftRadius: 20,
    // borderBottomRaightRadius: 20,
  },
  title: {
    fontSize: 12,
    color: colors.text.primary,
    marginTop: 30,
    marginLeft: 16,
  },
});
