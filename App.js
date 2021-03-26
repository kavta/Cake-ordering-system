import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './src/Navigation/DrawerNav';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
