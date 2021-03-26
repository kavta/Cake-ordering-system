import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import cake from '../assets/cake.png';
import Header from './Header';

const styles = StyleSheet.create({
  background: {
    paddingTop: 10,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: '#e8cbf2',
  },
  Heading: {
    fontSize: 40,
    textAlign: 'center',
  },
  Heading2: {
    fontSize: 30,
    textAlign: 'left',
    top: -100,
    marginLeft: 30,
    marginRight: 'auto',
    color: '#E49C92',
  },
  secondContainer: {
    marginTop: 20,
  },

  Image1: {
    height: 250,
    alignSelf: 'flex-end',
    width: 150,
    marginRight: 30,
  },
  background: {
    height: '100%',
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#ffffff', '#e8cbf2']} style={styles.background}>
        <Header />
        <View style={styles.background}>
          <View style={styles.secondContainer}>
            <Image source={cake} style={styles.Image1} />
            <Text style={styles.Heading2}>We Bake {'\n'}for you Sake</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
export default Home;
