import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const Navigation = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigation.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Navigation.Screen name="Home" component={Home} />
    </Navigation.Navigator>
  );
};

export default AppRoutes;
