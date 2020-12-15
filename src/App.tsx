import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';
import Routes from './routes/index';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Routes />
  </NavigationContainer>
);

export default App;
