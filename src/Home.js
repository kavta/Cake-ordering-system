import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import cake from '../assets/cake.png';

const styles = StyleSheet.create({
  background: {
    paddingTop: 10,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
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

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginLeft: 20, marginTop: 50 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.background}>
        <Text style={styles.Heading}>Welcome Bakery</Text>
        <Image source={cake} style={styles.Image1} />
        <Text style={styles.Heading2}>We Bake for you Sake</Text>
      </View>
    </SafeAreaView>
  );
};
export default Home;
