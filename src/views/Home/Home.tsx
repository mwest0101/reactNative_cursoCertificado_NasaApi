import React, {useEffect, useState} from 'react';

import {StyleSheet, View, Text} from 'react-native';
import Header from '../../components/Header';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';
import fetchApi from '../../utils/fetch';

import {format, sub} from 'date-fns';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (err) {
        console.error(err);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, 'yyyy-MM-dd');
        const fiveDaysAgoDate = format(sub(date, {days: 5}), 'yyyy-MM-dd');
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`,
        );

        console.log("todaysDate: "+todaysDate, "fiveDaysAgoDate: "+fiveDaysAgoDate);
        console.log("lastFiveDaysImagesResponse: ");
        console.log(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };
    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);
  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      {/* <Text>{todaysImage}</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
export default Home;
