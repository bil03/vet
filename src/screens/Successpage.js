import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Successpage = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('Appoitment');
  }, 3000);
  return (
    <View style={styles.container}>
      <Icon name="check-circle" color={'#FDCB5A'} size={150} />
      <Text style={styles.text}>Booking Sukses</Text>
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
  text: {
    fontSize: 35,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Successpage;
