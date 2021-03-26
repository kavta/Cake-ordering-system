import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Birthday1 from '../assets/Birthday/Birthday1.jpg';
import KBirthday1 from '../assets/Kids/KBirthday1.jpg';
import KBirthday2 from '../assets/Kids/KBirthday2.jpg';
import Header from '../src/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
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
  background: {
    height: '100%',
  },
});

const Categories = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ffffff', '#e8cbf2']} style={styles.background}>
        <Header />
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
      </LinearGradient>
    </View>
  );
};
export default Categories;
