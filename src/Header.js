import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginLeft: 20, marginTop: 50 }}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialIcons name="menu" size={30} color="#E49C92" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
