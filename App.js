import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AwalScreen from './src/screens/Awal';
import LoginScreen from './src/screens/Login';
import SplashScreen from './src/screens/Splash';
import RegisterScreen from './src/screens/Register';
import HomepageScreen from './src/screens/Homepage';
import Searchbar from './src/screens/Searchbar';
import Searchbar1 from './src/screens/Searchbar1';
import Messanger from './src/screens/Messanger';
import Appoitment from './src/screens/Appoitment';
import Profil from './src/screens/Profil';
import Homepage from './src/screens/Homepage';
import Detailpage from './src/screens/Detailpage';
import Tambahhewan from './src/screens/Tambahhewan';
import Successpage from './src/screens/Successpage';
import Editprofil from './src/screens/Editprofil';
import Chat from './src/screens/Chat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FDCB5A',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search bar"
        component={Searchbar}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messanger"
        component={Messanger}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="message-processing" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Appoitment"
        component={Appoitment}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AwalScreen" component={AwalScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomepageScreen" component={RootHome} />
        <Stack.Screen name="Searchbar1" component={Searchbar1} />
        <Stack.Screen name="Detailpage" component={Detailpage} />
        <Stack.Screen name="Tambahhewan" component={Tambahhewan} />
        <Stack.Screen name="Successpage" component={Successpage} />
        <Stack.Screen name="Editprofil" component={Editprofil} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
