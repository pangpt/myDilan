import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Courts,
  Officer,
  Messages,
  ChooseOfficer,
  Chatting,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Petugas" component={Officer} />
      <Tab.Screen name="Pesan" component={Messages} />
      <Tab.Screen name="Pengadilan" component={Courts} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChooseOfficer"
        component={ChooseOfficer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
