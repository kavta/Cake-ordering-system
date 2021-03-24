import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Birthday1 from '../assets/Birthday/Birthday1.jpg';
import KBirthday1 from '../assets/Kids/KBirthday1.jpg';
import KBirthday2 from '../assets/Kids/KBirthday2.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#e8cbf2',
  },
  Heading: {
    fontSize: 40,
    textAlign: 'center',
  },
  Heading2: {
    fontSize: 20,
    textAlign: 'left',
  },
  Image1: {
    height: 200,
    alignSelf: 'center',
    width: 150,
  },
});

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Categories</Text>
      <View>
        <Text style={styles.Heading2}>Birthday</Text>
        <Image source={Birthday1} style={styles.Image1} />
      </View>
      <View>
        <Text style={styles.Heading2}>Kids</Text>
        <Image source={KBirthday1} style={styles.Image1} />

        <Image source={KBirthday2} style={styles.Image1} />
      </View>
    </View>
  );
};
export default Categories;
