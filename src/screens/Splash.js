import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import logo from '../assets/favicon.png';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('AwalScreen');
  }, 3000);
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.vet}>VET</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 195,
    height: 77,
    alignSelf: 'center',
  },
  vet: {
    fontSize: 24,
    color: '#FDCB5A',
    fontFamily: 'Roboto',
    letterSpacing: 10,
    marginTop: 10,
  },
});

export default Splash;
