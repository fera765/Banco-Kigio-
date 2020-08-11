import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Security from '../components/Security';

const AppRoutes = createStackNavigator();

const Routes: React.FC = () => (
  <AppRoutes.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <AppRoutes.Screen name="Home" component={Home} />
    <AppRoutes.Screen name="Payment" component={Payment} />
    <AppRoutes.Screen name="Security" component={Security} />
  </AppRoutes.Navigator>
);

export default Routes;
