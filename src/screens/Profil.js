import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Profil = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 400,
          height: 60,
          backgroundColor: '#1A3150',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              fontWeight: 'bold',
            }}>
            Profil
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('Editprofil')}>
          <MaterialCommunityIcons
            style={{
              marginTop: 10,
              marginRight: 20,
              alignSelf: 'flex-end',
            }}
            name="pencil"
            color={'#000000'}
            size={20}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              width: 55,
              height: 55,
              borderRadius: 55 / 2,
              marginLeft: 25,
            }}
            source={require('../assets/muka.png')}
          />
          <View
            style={{
              marginTop: 5,
              marginLeft: 16,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: 'bold',
              }}>
              Alexandria Raihan
            </Text>
            <Text
              style={{
                color: '#1A3150',
                fontSize: 15,
              }}>
              +628 2184291235
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
            marginHorizontal: 25,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="calendar-range"
              color={'#1A3150'}
              size={22}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              24 Years
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 22,
                height: 22,
              }}
              source={require('../assets/jejak.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              4 pets
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 22,
                height: 22,
              }}
              source={require('../assets/kalendar.png')}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              3 Times
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardout}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 90,
          }}
          onPress={() => navigation.navigate('AwalScreen')}>
          <MaterialCommunityIcons name="logout" color={'#000000'} size={30} />
          <Text
            style={{
              fontSize: 15,
              color: '#000000',
              marginLeft: 8,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    width: 350,
    height: 170,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 25,
    elevation: 5,
  },
  cardout: {
    width: 350,
    height: 60,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'center',
    paddingLeft: 24,
    elevation: 10,
  },
});

export default Profil;
