import { StyleSheet } from 'react-native';
import { GetStarted, Splash } from './pages';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
