import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import logo from '../assets/favicon.png';
import {useNavigation} from '@react-navigation/native';

const Awal = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.vet}>VET</Text>
      <View
        style={{
          top: 160,
          marginTop: 100,
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.textButton1}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.textButton2}>Registrasi</Text>
        </TouchableOpacity>
      </View>
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
  button1: {
    backgroundColor: '#FDCB5A',
    width: 348,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    backgroundColor: '#FFFFFF',
    width: 348,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  textButton1: {
    color: '#1A3150',
    fontSize: 16,
  },
  textButton2: {
    color: '#875C25',
    fontSize: 16,
  },
});

export default Awal;
