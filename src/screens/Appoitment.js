import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Appoitment = () => {
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
            Notifications
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 40,
          }}>
          My Appoitment
        </Text>
        <TouchableOpacity style={styles.cardapp}>
          <View style={styles.carddalam}>
            <Text style={styles.textdalam}>12</Text>
            <Text style={styles.textdalam}>Oct</Text>
          </View>
          <View>
            <Text
              style={{
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
              Buka: 12.00-15.00
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardapp}>
          <View style={styles.carddalam}>
            <Text style={styles.textdalam}>12</Text>
            <Text style={styles.textdalam}>Oct</Text>
          </View>
          <View>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 15,
                color: '#875C25',
              }}>
              Jakarta
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000000',
                paddingLeft: 20,
                fontWeight: 'bold',
              }}>
              RS Jiwa Hewan
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#1A3150',
                paddingLeft: 20,
                fontWeight: 'bold',
              }}>
              Buka: 09.00-12.00
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardapp}>
          <View style={styles.carddalam}>
            <Text style={styles.textdalam}>12</Text>
            <Text style={styles.textdalam}>Oct</Text>
          </View>
          <View>
            <Text
              style={{
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
              Buka: 12.00-15.00
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: 'bold',
            marginLeft: 20,
            marginTop: 35,
          }}>
          History
        </Text>
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
                Book Again
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
                Book Again
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
  cardapp: {
    width: 350,
    height: 80,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    elevation: 5,
  },
  carddalam: {
    width: 58,
    height: 60,
    backgroundColor: '#1A3150',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
  },
  textdalam: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 5,
    width: 343,
    height: 130,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    elevation: 2,
    borderRadius: 5,
    alignSelf: 'center',
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

export default Appoitment;
