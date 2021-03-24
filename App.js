import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

import Home from './src/Home';
import Aboutus from './src/Aboutus';
import Categories from './src/Categories';
import Profileicon from './assets/cake.png';

const styles = StyleSheet.create({
  Profile: {
    height: 200,
    width: 200,
  },
});

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Profile"
          component={Home}
          options={{
            drawerIcon: () => (
              // <MaterialCommunityIcons
              //   name="face-profile"
              //   size={80}
              //   color="black"
              // />
              // ),
              <Image source={Profileicon} style={styles.Profile} />
            ),
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: () => (
              <FontAwesome5 name="home" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={Categories}
          options={{
            drawerIcon: () => (
              <FontAwesome name="list-ul" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Accesories"
          component={Home}
          options={{
            drawerIcon: () => (
              <MaterialCommunityIcons name="balloon" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourite"
          component={Home}
          options={{
            drawerIcon: () => (
              <MaterialIcons name="favorite" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Home}
          options={{
            drawerIcon: () => (
              <Ionicons name="md-settings-sharp" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="About us"
          component={Aboutus}
          options={{
            drawerIcon: () => (
              <Ionicons name="people-sharp" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Signout"
          component={Aboutus}
          options={{
            drawerIcon: () => (
              <AntDesign name="logout" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
