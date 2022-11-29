import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

const Editprofil = () => {
  const [male, setFamale] = useState('');
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
          <TouchableOpacity>
            <Icon
              onPress={() => navigation.goBack()}
              name="arrow-back"
              color={'#FFFFFF'}
              size={25}
            />
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
        <View style={styles.basic}>
          <Text
            style={{
              size: 15,
              color: '#000000',
            }}>
            Basic Information
          </Text>
          <Text
            style={{
              size: 15,
              color: '#ED5341',
            }}>
            *
          </Text>
        </View>
        <Text style={styles.text}>Full Name</Text>
        <TextInput
          style={styles.Input}
          placeholder="Alexandria Raihan"
          placeholderTextColor="#1A3150"
        />
        <Text
          style={{
            fontSize: 15,
            color: '#1A3150',
            marginLeft: 20,
            marginTop: 10,
          }}>
          Gender
        </Text>
        <View style={styles.wrapper}>
          {['Male', 'Female'].map(feeling => (
            <View key={feeling} style={styles.male}>
              <Text style={styles.feeling}>{feeling}</Text>
              <TouchableOpacity
                style={styles.gender}
                onPress={() => setFamale(feeling)}>
                {male === feeling && <View style={styles.inner} />}
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.basic1}>
          <Text
            style={{
              size: 15,
              color: '#000000',
            }}>
            Contact Details
          </Text>
        </View>
        <Text style={styles.text}>Mobile Number</Text>
        <TextInput
          style={styles.Input}
          placeholder="+62821 9123912939"
          placeholderTextColor="#1A3150"
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.Input}
          placeholder="asdeiqieqewi@gmail.com"
          placeholderTextColor="#1A3150"
        />
        <View style={styles.basic1}>
          <Text
            style={{
              size: 15,
              color: '#000000',
            }}>
            Informasi Tentang Hewan Peliharaan
          </Text>
        </View>
        <Text style={styles.text}>Jumlah Hewan Peliharaan</Text>
        <TextInput
          style={styles.Input}
          placeholder="4 Pets"
          placeholderTextColor="#1A3150"
        />
        <Text style={styles.text}>Waktu berkunjung untuk Perawatan</Text>
        <TextInput
          style={styles.Input}
          placeholder="3 Times"
          placeholderTextColor="#1A3150"
        />
        <View style={styles.booknow}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.navigate('Profil')}>
            <Text style={styles.textButton1}>Tambahkan</Text>
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
  basic: {
    width: 400,
    height: 40,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  basic1: {
    marginTop: 25,
    width: 400,
    height: 40,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
  },
  Input: {
    alignSelf: 'center',
    width: 355,
    height: 50,
    borderWidth: 1,
    borderColor: '#749DD2',
    borderRadius: 4,
    paddingHorizontal: 15,
    color: '#1A3150',
    marginTop: 5,
  },
  text: {
    fontSize: 15,
    color: '#1A3150',
    marginLeft: 20,
    marginTop: 15,
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
    marginTop: 60,
    width: 400,
    height: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    elevation: 20,
  },
  wrapper: {
    flexDirection: 'row',
  },
  male: {
    marginHorizontal: 20,
  },
  feeling: {
    fontSize: 15,
    top: 19,
    marginLeft: 29,
    color: '#000',
  },
  gender: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#FDCB5A',
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: '#FDCB5A',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 3,
  },
});

export default Editprofil;
