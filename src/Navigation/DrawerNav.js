import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';
import AboutUs from '../AboutUs';
import Categories from '../Categories';
import Accesories from '../Accesories';
import Favourite from '../Favourite';
import Profileicon from '../../assets/cake.png';
import {
  FontAwesome5,
  MaterialIcons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  Profile: {
    height: 200,
    width: 200,
  },
});

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Profile"
        component={Home}
        options={{
          drawerIcon: () => (
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
        component={Accesories}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="balloon" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
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
        name="About Us"
        component={AboutUs}
        options={{
          drawerIcon: () => (
            <Ionicons name="people-sharp" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Signout"
        component={AboutUs}
        options={{
          drawerIcon: () => <AntDesign name="logout" size={24} color="black" />,
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
