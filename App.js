import React from 'react';
import { StatusBar } from 'react-native'
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './scr/pages/routes';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>petunia-boards</Text>      
      <StatusBar style="auto" />
    </View>
  );
}


