import { StatusBar } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import  Routes  from './scr/pages/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}



