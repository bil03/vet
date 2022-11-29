import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';

const Detailpage = () => {
  const [showModal, setShowModal] = useState(false);
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
            flexDirection: 'row',
            marginTop: 20,
            marginHorizontal: 25,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="keyboard-backspace" color={'#FFFFFF'} size={25} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              marginHorizontal: 10,
            }}>
            Sebelumnya
          </Text>
        </View>
      </View>
      <ScrollView>
        <Image
          style={{
            width: 400,
            height: 200,
            alignSelf: 'center',
            resizeMode: 'stretch',
          }}
          source={require('../assets/gambar1.png')}
        />
        <View>
          <Text
            style={{
              marginTop: 20,
              paddingLeft: 20,
              fontSize: 15,
              color: '#875C25',
            }}>
            Batam
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#000000',
              paddingLeft: 20,
              fontWeight: 'bold',
            }}>
            Klinik Kehewanan
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#1A3150',
              paddingLeft: 20,
              fontWeight: 'bold',
            }}>
            Buka: 09.00-20.00
          </Text>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            paddingTop: 20,
            marginLeft: 20,
          }}>
          Rekomendasi Dokter
        </Text>
        <TouchableOpacity style={styles.card}>
          <Image
            style={{
              width: 52,
              height: 52,
              marginHorizontal: 16,
            }}
            source={require('../assets/orang2.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
              }}>
              Dokter Kucing
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                fontWeight: 'bold',
              }}>
              Dr. Alizah, SP. Kucing
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                fontWeight: 'bold',
              }}>
              2 Years experience
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              style={{
                paddingLeft: 50,
              }}
              name="check-circle"
              color={'black'}
              size={25}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={{
              width: 52,
              height: 52,
              marginHorizontal: 16,
            }}
            source={require('../assets/orang1.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#875C25',
              }}>
              Dokter Kucing
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                fontWeight: 'bold',
              }}>
              Dr. Jaquin SP. hewan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                fontWeight: 'bold',
              }}>
              2 Years experience
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              style={{
                paddingLeft: 50,
              }}
              name="check-circle"
              color={'#A8A8A8'}
              size={25}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 23,
          }}>
          <Text
            style={{
              marginTop: 7,
              fontSize: 20,
              color: '#000000',
            }}>
            Pilih Waktu Kunjungan
          </Text>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <View style={styles.cardkecil}>
              <Icon name="calendar-check" color={'black'} size={20} />
              <Icon name="menu-down" color={'black'} size={20} />
            </View>
          </TouchableOpacity>
          <Modal visible={showModal} animationType="fade">
            <Calendar
              style={{
                borderRadius: 10,
                elevation: 4,
                margin: 20,
              }}
              onDayPress={date => {
                console.log(date);
                setShowModal(false);
              }}
            />
          </Modal>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
              marginBottom: 5,
            }}>
            <TouchableOpacity style={styles.buttonhari1}>
              <Text style={styles.Textbutton}>Senin</Text>
              <Text style={styles.Textbutton}>12 Okt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonhari}>
              <Text style={styles.Textbutton}>Selasa</Text>
              <Text style={styles.Textbutton}>13 Okt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonhari}>
              <Text style={styles.Textbutton}>Rabu</Text>
              <Text style={styles.Textbutton}>14 Okt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonhari}>
              <Text style={styles.Textbutton}>Kamis</Text>
              <Text style={styles.Textbutton}>15 Okt</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              marginBottom: 5,
            }}>
            <TouchableOpacity style={styles.buttonjam}>
              <Text style={styles.Textbutton}>09.00 - 12.00 Pagi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonjam1}>
              <Text style={styles.Textbutton}>12.00 - 15.00 siang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonjam}>
              <Text style={styles.Textbutton}>15.00 - 18.00 Sore</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 23,
          }}>
          <Text
            style={{
              marginTop: 7,
              fontSize: 20,
              color: '#000000',
            }}>
            Hewan Peliharaan
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Tambahhewan')}>
            <View style={styles.cardtambah}>
              <Icon name="plus-circle-outline" color={'black'} size={20} />
              <Text
                style={{
                  fontSize: 12,
                }}>
                Tambahkan Hewan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cardhewan}>
          <Image
            style={{
              width: 30,
              height: 28,
              marginLeft: 16,
            }}
            source={require('../assets/kucing.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 30,
              }}>
              Ronald / male
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              style={{paddingLeft: 140}}
              name="close"
              color={'black'}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardhewan}>
          <Image
            style={{
              width: 30,
              height: 28,
              marginLeft: 16,
            }}
            source={require('../assets/kucing.png')}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                marginLeft: 30,
              }}>
              Reah / Female
            </Text>
          </View>
          <TouchableOpacity>
            <Icon
              style={{paddingLeft: 140}}
              name="close"
              color={'black'}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.booknow}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate('Successpage')}>
            <Text style={styles.textButton1}>Book Now</Text>
          </TouchableOpacity>
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
  card: {
    width: 350,
    height: 88,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    elevation: 2,
  },
  cardkecil: {
    width: 75,
    height: 29,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    elevation: 2,
    marginVertical: 5,
  },
  buttonhari1: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 55,
    shadowColor: 'black',
    elevation: 2,
    backgroundColor: '#FDCB5A',
    marginHorizontal: 10,
    borderRadius: 3,
  },
  buttonhari: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 55,
    shadowColor: 'black',
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    borderRadius: 3,
  },
  Textbutton: {
    fontSize: 15,
    color: '#1A3150',
  },
  buttonjam: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 134,
    height: 34,
    shadowColor: 'black',
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 22,
    borderRadius: 3,
  },
  buttonjam1: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 34,
    backgroundColor: '#FDCB5A',
    shadowColor: 'black',
    elevation: 2,
    marginHorizontal: 22,
    borderRadius: 3,
  },
  cardtambah: {
    width: 145,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: '#FDCB5A',
    marginVertical: 5,
    borderRadius: 19,
  },
  cardhewan: {
    width: 350,
    height: 55,
    marginTop: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 2,
    borderRadius: 3,
  },
  button1: {
    backgroundColor: '#FDCB5A',
    width: 348,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textButton1: {
    color: '#1A3150',
    fontSize: 16,
    fontWeight: 'bold',
  },
  booknow: {
    marginTop: 20,
    width: 400,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    elevation: 20,
  },
});

export default Detailpage;
