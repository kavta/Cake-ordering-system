import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    backgroundColor: '#e8cbf2',
  },
});
const Aboutus = () => {
  return (
    <View style={styles.container}>
      <Text>about us</Text>
    </View>
  );
};
export default Aboutus;
