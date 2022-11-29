import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const Chat = () => {
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
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back"
            color={'#FFFFFF'}
            size={25}
          />
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
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TextInput
          style={styles.Input1}
          placeholder="Type your message here"
          placeholderTextColor="#7D7D7D"
        />
        <TouchableOpacity>
          <Feather
            style={{
              top: 695,
              right: 15,
            }}
            name={'send'}
            color={'#9F9F9F'}
            size={25}
          />
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
  Input1: {
    alignSelf: 'center',
    width: 330,
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 4,
    paddingHorizontal: 15,
    color: '#1A3150',
    marginTop: 680,
    // marginTop: 650,
    left: 30,
    color: 'black',
  },
});

export default Chat;
