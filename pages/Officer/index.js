import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import {
  HomeProfile,
  NewsItem,
  RatedInformation,
} from '../../components/molecules';
import OfficerCategory from '../../components/molecules/OfficerCategory';
import { colors } from '../../utils';
import { Gap } from '../../components/atoms';
import { JSONCategoryOfficer } from '../../assets';

export default function Officer({ navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile />
            <Text style={styles.welcome}>
              Cari informasi tentang pengadilan di sini
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryOfficer.data.map((item) => {
                  return (
                    <OfficerCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseOfficer')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Informasi Paling Dicari</Text>
            <RatedInformation />
            <RatedInformation />
            <RatedInformation />
            <Text style={styles.sectionLabel}>Berita</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    // paddingVertical: 30,
    // paddingHorizontal: 16,
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  welcome: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  sectionLabel: {
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
