import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
const ContentView = ({heading}) => {
  return (
    <View style={styles.parentView}>
      <Text style={[styles.headingText, {textAlign: 'center'}]}>{heading}</Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
        }}>
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  );
};

export default ContentView;
