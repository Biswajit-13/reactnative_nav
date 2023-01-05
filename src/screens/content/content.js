import React from 'react';
import {ScrollView, View} from 'react-native';
import {ContentView} from '../../components/content';
import styles from '../../assets/styles';
import { Navigation } from 'react-native-navigation';

const Home = () => {
  return (
    // <ScrollView>
      <View style={styles.parentView}>
        <View style={styles.semiCircle}></View>
        <ContentView heading={'Regular'} />
        <ContentView heading={'Specials'} />
      </View>
    // </ScrollView>
  );
};

export default Home;
