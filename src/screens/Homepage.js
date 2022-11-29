import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const Homepage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 20,
            backgroundColor: '#1A3150',
          }}>
          <Image
            style={{
              width: 35,
              height: 15,
            }}
            source={require('../assets/favicon.png')}
          />
          <Text
            style={{
              fontSize: 16,
              color: '#FDCB5A',
              paddingHorizontal: 7,
              letterSpacing: 3,
            }}>
            VET
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Messanger')}>
            <Icon style={{left: 188}} name="email" color={'#ffff'} size={26} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 26,
              height: 26,
              borderRadius: 26 / 2,
              backgroundColor: '#FDCB5A',
              justifyContent: 'center',
              alignItems: 'center',
              left: 205,
            }}
            onPress={() => navigation.navigate('Profil')}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
              }}>
              N
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Image style={styles.cirle} source={require('../assets/cirle.png')} />
        <View
          style={{
            height: 220,
          }}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            dotColor={'#C2CDDB'}
            activeDotColor={'#FDCB5A'}>
            <Image
              source={require('../assets/gambar1.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
            <Image
              source={require('../assets/gambar1.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
            <Image
              source={require('../assets/gambar1.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
            <Image
              source={require('../assets/gambar1.png')}
              resizeMode="stretch"
              style={styles.slide}
            />
          </Swiper>
        </View>
        <View
          style={{
            width: 300,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={require('../assets/kucing.png')}
            />
            <Text>Kucing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={require('../assets/anjing.png')}
            />
            <Text>Anjing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={require('../assets/hamster.png')}
            />
            <Text>Hamster</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
              }}
              source={require('../assets/kelinci.png')}
            />
            <Text>Kelinci</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 25,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#000000',
            }}>
            Konsultasi Klinik
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Searchbar1')}>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
              }}>
              Lihat Lainnya {'>>'}
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            margin: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
            }}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.Textbutton}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Textbutton}>Batam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Textbutton}>Jakarta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Textbutton}>Bandung</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.Textbutton}>Padang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  cirle: {
    width: 400,
    height: 130,
    alignSelf: 'center',
    position: 'absolute',
  },
  button: {
    width: 120,
    height: 40,
    borderWidth: 1,
    borderColor: '#FDCB5A',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    width: 120,
    height: 40,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textbutton: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    margin: 'auto',
    marginHorizontal: 5,
  },
  card: {
    marginTop: 20,
    flexDirection: 'row',
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
  slide: {
    position: 'absolute',
    height: 130,
    width: 300,
    top: 38,
    left: 50,
    borderRadius: 5,
  },
});

export default Homepage;
