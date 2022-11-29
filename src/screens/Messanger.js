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
import {useNavigation} from '@react-navigation/native';

const Messanger = () => {
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
            Messanger
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 57 / 2,
            marginLeft: 20,
            marginTop: 20,
          }}
          source={require('../assets/ruko.png')}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              top: 20,
              left: 25,
            }}>
            1Hr
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            RS Kalimanjaro
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: '#000000',
            }}>
            Halo kak, Kamu dimana? Sudah bisa {'\n'}ke Klinik
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 57 / 2,
            marginLeft: 20,
            marginTop: 20,
          }}
          source={require('../assets/ruko.png')}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              top: 20,
              left: 25,
            }}>
            1Hr
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            RS Kalimanjaro
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: '#000000',
            }}>
            Halo kak, Kamu dimana? Sudah bisa {'\n'}ke Klinik
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 57 / 2,
            marginLeft: 20,
            marginTop: 20,
          }}
          source={require('../assets/ruko.png')}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              top: 20,
              left: 25,
            }}>
            1Hr
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            RS Kalimanjaro
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: '#000000',
            }}>
            Halo kak, Kamu dimana? Sudah bisa {'\n'}ke Klinik
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 57 / 2,
            marginLeft: 20,
            marginTop: 20,
          }}
          source={require('../assets/ruko.png')}
        />
        <View
          style={{
            marginLeft: 20,
          }}>
          <Text
            style={{
              alignSelf: 'flex-end',
              top: 20,
              left: 25,
            }}>
            1Hr
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000000',
            }}>
            RS Kalimanjaro
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: '#000000',
            }}>
            Halo kak, Kamu dimana? Sudah bisa {'\n'}ke Klinik
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  card: {
    marginTop: 10,
    width: 400,
    // backgroundColor: 'cyan',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Messanger;
