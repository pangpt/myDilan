import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  HomeProfile,
  NewsItem,
  RatedInformation,
} from '../../components/molecules';
import OfficerCategory from '../../components/molecules/OfficerCategory';
import { colors, getData, showError } from '../../utils';
import { Gap } from '../../components/atoms';
import { ILNullPhoto } from '../../assets';
import { Fire } from '../../config';

export default function Officer({ navigation }) {
  const [news, setNews] = useState([]);
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    category: '',
  });
  useEffect(() => {
    getNews();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getTopRatedOfficer = () => {
    Fire.database()
      .ref('officers/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setOfficers(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryInfo = () => {
    Fire.database()
      .ref('category-info/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);

          setCategoryInfo(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  const getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = ILNullPhoto;
      setProfile(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile
              profile={profile}
              onPress={() => navigation.navigate('UserProfile', profile)}
            />
            <Text style={styles.sectionLabel}>Video Terbaru</Text>
          </View>
          {news.map((item) => {
            return (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}
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
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
