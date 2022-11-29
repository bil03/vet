import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Searchbar = () => {
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
            Cari Klinik Terdekat
          </Text>
        </View>
      </View>
      <View
        style={{
          // marginTop: 60,
          alignContent: 'center',
          alignItems: 'center',
          width: 400,
          height: 40,
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#F1F1F1',
        }}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={{
              paddingLeft: 20,
            }}
            name="map-marker"
            color={'#875C25'}
            size={25}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            paddingLeft: 15,
          }}>
          Jalan Sriwijaya Kabil Batam
        </Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            style={{
              paddingLeft: 40,
            }}
            name="pencil"
            color={'#A7A7A7'}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <TextInput
          style={styles.search}
          placeholder="Cari klinik terdekat"
          placeholderTextColor="#CACACA"
        />
        <Ionicons
          style={{
            top: 24,
            right: 325,
          }}
          name="search"
          color={'#CACACA'}
          size={20}
        />
      </View>
      <ScrollView>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.gambar}
            source={require('../assets/gambar1.png')}
          />
          <View>
            <Text
              style={{
                paddingTop: 18,
                paddingLeft: 15,
                fontSize: 15,
                color: '#875C25',
              }}>
              Batam
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Klinik Kehewanan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 15,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-20.00
            </Text>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => navigation.navigate('Detailpage')}>
              <Text
                style={{
                  color: '#000000',
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  search: {
    marginTop: 16,
    alignSelf: 'center',
    width: 348,
    height: 35,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    paddingHorizontal: 60,
    paddingVertical: 5,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    marginTop: 20,
    width: 343,
    height: 130,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    elevation: 2,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 5,
  },
  gambar: {
    width: 130,
    height: 130,
  },
  submit: {
    borderRadius: 2,
    marginTop: 6,
    marginLeft: 9,
    width: 195,
    height: 30,
    backgroundColor: '#FDCB5A',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Searchbar;
