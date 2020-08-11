import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Header, { navigationRef } from './components/Header';
import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <StatusBar barStyle="light-content" backgroundColor="#1A1E3a" />
    <Header />
    <Routes />
  </NavigationContainer>
);

export default App;
