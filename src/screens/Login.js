import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const [show, setShow] = React.useState(false);
  const [Visible, setVisible] = React.useState(true);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginTop: 40,
          marginHorizontal: 25,
        }}
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" color={'#FFFFFF'} size={25} />
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            marginHorizontal: 10,
          }}>
          Sebelumnya
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 20,
          marginTop: 50,
          marginLeft: 25,
        }}>
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 25,
          marginTop: 30,
          marginBottom: 4,
          color: '#F8F8F8',
        }}>
        Username
      </Text>
      <TextInput
        style={styles.Input}
        placeholder="Enter Your Username"
        placeholderTextColor="#C2CDDB"
      />
      <Text
        style={{
          fontSize: 15,
          marginHorizontal: 25,
          marginTop: 25,
          marginBottom: 4,
          color: '#F8F8F8',
        }}>
        Password
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TextInput
          style={styles.Input1}
          secureTextEntry={Visible}
          placeholder="Enter Your Password"
          placeholderTextColor="#C2CDDB"
        />
        <TouchableOpacity
          onPress={() => {
            setVisible(!Visible);
            setShow(!show);
          }}>
          <Icon
            style={{
              right: 30,
              marginTop: 12,
            }}
            name={show === false ? 'eye-off' : 'eye'}
            color={'#F1F1F1'}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          marginTop: 8,
          marginRight: 27,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#FDCB5A',
            textDecorationLine: 'underline',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomepageScreen')}>
        <Text
          style={{
            color: '#1A3150',
            fontSize: 16,
          }}>
          Submit
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#FFFFFF',
          }}>
          Don't have an account? please
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text
            style={{
              fontSize: 15,
              color: '#FDCB5A',
              paddingHorizontal: 5,
              textDecorationLine: 'underline',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A3150',
  },
  Input: {
    alignSelf: 'center',
    width: 348,
    height: 50,
    borderWidth: 1,
    borderColor: '#749DD2',
    borderRadius: 4,
    paddingHorizontal: 14,
    color: 'white',
  },
  Input1: {
    alignSelf: 'center',
    width: 348,
    height: 50,
    borderWidth: 1,
    borderColor: '#749DD2',
    borderRadius: 4,
    left: 13,
    paddingHorizontal: 14,
    color: 'white',
  },
  button: {
    backgroundColor: '#FDCB5A',
    width: 348,
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Login;
